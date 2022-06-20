import { Box } from "@mui/material";
import React from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import { makeStyles } from "@material-ui/styles";
import Banner from "../../organisms/Banner";
import CardsList from "../../molecules/CardsList";
import SearchBar from "../../molecules/SearchBar/SearchBar";

const useStyles = makeStyles({
  libraryText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "30.17px",
    position:"relative",
    left:"86px",
    textAlign:'left',
    width:'500px',
    padding:'25px',
  },
});

function HomeTemplate() {
  const classes = useStyles();

  
  return (
    <Box minHeight={"100vh"} >
      <Box width="90%" padding="0% 5%">
      <Box paddingTop="35px" marginLeft={"-15px"}>
      <Header avatarIcon={true} ></Header>
      </Box>
      <Box display="flex" justifyContent={"center"}  width="100%" padding="40px" marginLeft={"-40px"} >
      <Banner/>
      </Box>
      <Box position="relative" padding={"20px"} left="110px" width={"80%"} marginLeft={"40px"} >
      <SearchBar palceholder={"Search by title or author"}/>
      </Box>
      <Box position={"relative"} left={"80px"} width={"90%"} minHeight={1000} paddingTop={"10px"}>
      <Box className={classes.libraryText} marginLeft={"-20px"}>Trending Blinks</Box>
       <Box paddingTop={"10px"} marginLeft={"45px"}>
      <CardsList librarybu={true} checkComplete={0}></CardsList>
      </Box>
      <Box className={classes.libraryText} paddingTop={"70px"} marginLeft={"-60px"}>Just Added</Box>
      <CardsList librarybu={true} checkComplete={0} ></CardsList>
      <Box className={classes.libraryText} marginLeft={"-60px"} paddingTop={"50px"} >Featured audio blinks</Box>
      <CardsList librarybu={true} checkComplete={0}></CardsList>
      </Box> 
      </Box>
      <Box paddingTop="20px">
      <Footer></Footer>
      </Box>
    </Box>
  );
}

export default HomeTemplate;
