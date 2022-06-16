import { List, ListItem, ListItemText} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle=makeStyles({
    heading:{
        fontFamily:'Cera Pro !important' ,
            fontWeight:'700 !important',
            fontSize:'16px !important',
            lineHeight:'24px !important',
    },
    iteming:{
      fontFamily:'Cera Pro !important' ,
          fontWeight:'400 !important',
          fontSize:'16px !important',
          lineHeight:'24px !important',
  },
});

interface props{
  listHead:string;
  listingItems:string[];
}

function Editorial(props:props) {

  const classes = useStyle();

  const trying = props.listingItems;
  const listing = trying.map((item, key) =>
  <ListItem style={{ padding: "0px" }} key={key} >
  <ListItemText secondary={item} classes={{secondary:classes.iteming}}/>
</ListItem>
  );
  
    

  return (
    <List
      style={{
        height: "auto",
        width: "214px",
        display: "flex",
        padding: "0px",
        gap: "16px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}

    >
      <ListItem style={{ padding: "0px" }}>
        <ListItemText classes={{primary:classes.heading}} primary={props.listHead}/>
      </ListItem>
      {listing}
    </List>
  );
}

export default Editorial;
