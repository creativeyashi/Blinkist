import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./index.css";


const useStyles = makeStyles({
  extended: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    display: "flex",
    color:'#6D787E',

    "&:hover": {
      color: "#0365F2",
    },
    
  },
  cardText:{
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "18px",
    letterSpacing: "0px",
    textAlign: "left",
    display: "flex",
    fontStyle:'normal',
    color: '#6D787E',
  }
});

interface props {
  name: string;
  icon: React.ReactNode;
  styling:string
}

function IconText(props: props) {
  const classes = useStyles();
  var styles = props.styling === "extended"? classes.extended : classes.cardText;
  return (
      <Typography component="div" className={styles}>
        <Box className="iconi">{props.icon}</Box>
        <Box>{props.name}</Box>
      </Typography>
  );
}

export default IconText;
