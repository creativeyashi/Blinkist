import { Box, StyledEngineProvider, Tab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";  
import { makeStyles } from "@material-ui/styles";
import IconText from "../../atoms/IconText";
import { ReactComponent as Time } from "../../../images/time.svg";
import Buttons from "../../atoms/Button";
import api from "../../../api/api";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ReactComponent as RightArrow } from "../../../images/rightArrow.svg";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "36px !important",
    lineHeight: "45.25px !important",
    padding:'25px 0px',
  },
  subtitleText: {
    fontStyle: "Cera Pro",
    fontWeight: 400,
    fontSize: "20px !important",
    lineHeight: "25px",
    padding:'0px 0px',
  },
  authorText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    padding:'24px 0px',
    color:'#6D787E',
  },
});

interface BookProps {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  author: string;
  timeTakenToRead: number;
  numberOfReads: string;
  status: string;
  complete: number;
  synopsis: string;
  whoIsItFor: string;
  aboutAuthor: string;
}

interface props{
  id:number;
}

function BookTemplate(props:props) {
  const classes = useStyles();

  const {user} = useAuth0();

  const [book,setBook] = useState<BookProps>();

  const { bookId } = useParams();

  const getBookById = async() =>{
    const response = await api.get("http://localhost:3001/books/"+bookId+"/");
    const data = response.data;
    setBook(data)
  }

  const [value,setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) =>{
    setValue(newValue);
  }

  useEffect(()=>{
    getBookById();
  });
  return (
    <StyledEngineProvider>
    <Box minHeight={"100vh"}>
    <Box width="90%" padding="0% 5%">
      <Box paddingTop="25px" marginLeft={"-35px"}>
      <Header avatarIcon={true} chars={user?.name}></Header>
      </Box>
      <Box display={"flex"} justifyContent="center" width="99%" padding={"60px 0px"} marginLeft={"55px"}>
        <Box  width="84%">
          <Box display={"flex"} justifyContent="flex-start" flexWrap={"wrap"}>
            <Box width="100%" color={'#03314B'} fontSize={"16px"} lineHeight={"5px"} textAlign="left">
            Get the key ideas from
            </Box>
            <Box width="60%" paddingTop={"15px"} textAlign="left">
              <Typography className={classes.titleText} fontWeight={700}>{book?.title}</Typography>
              <Typography className={classes.subtitleText}>{book?.subtitle}</Typography>
              <Typography className={classes.authorText}>By {book?.author}</Typography>
              <IconText
              name={book?.timeTakenToRead+"-minutes read"}
              icon={<Time style={{ height: "19px", width: "19px" }} />}
              styling={"cardText"}
            />
            <Box display="flex" justifyContent={"space-between"} paddingTop={"70px"} marginLeft={"-15px"} width={"80%"}>
            <Buttons name={"Read Now"} onClick={undefined} classing={""} icon={undefined} end={undefined} ></Buttons>
             <Buttons name={"Finished Reading"} onClick={undefined} classing={"connect"} icon={undefined} end={undefined}></Buttons>
             <Buttons name={"send to Kindle"} onClick={undefined} classing={"exploreNoH"} icon={undefined} end={<RightArrow/>}></Buttons>
          
            </Box>
            </Box>
            <Box width="40%" display={"flex"} justifyContent={"center"} paddingTop={"40px"} >
              <Box component={"img"} sx={{height:"292px", width:"280px"}} alt="Book Image"
                src={book?.src} />
            </Box>
          </Box>
          <Box width="100%" padding={"40px 0px"} marginLeft={"-15px"} textAlign={"left"}>
            <TabContext value={value} >
              <TabList onChange={handleChange} textColor="inherit" 
              sx={{width:'60%'}}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2CE080",
      
              },
            }}>
                <Tab value="1" label="Synopsis" sx={{textTransform:"none", width:"33%",alignItems:"flex-start"}}></Tab>
                <Tab value="2" label="Who is it for?" sx={{textTransform:"none", width:"33%",alignItems:"flex-start"}}></Tab>
                <Tab value="3" label="About the author" sx={{textTransform:"none", width:"33%",alignItems:"flex-start"}}></Tab>
              </TabList>
              <Box width="60%" minHeight={"200px"} textAlign={"left"}>
                <TabPanel value="1" className={classes.authorText} style={{color:'#03314B', marginLeft:'-15px'}}>{book?.synopsis}</TabPanel>
                <TabPanel value="2" className={classes.authorText} style={{color:'#03314B', marginLeft:'-15px'}}>{book?.whoIsItFor}</TabPanel>
                <TabPanel value="3" className={classes.authorText} style={{color:'#03314B', marginLeft:'-15px'}}>{book?.aboutAuthor}</TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Box>
      </Box>
      </Box>
      <Box paddingTop="20px">
      <Footer></Footer>
      </Box>
    </Box>
    </StyledEngineProvider>
  );
}

export default BookTemplate;
