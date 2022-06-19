/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../../images/bannerimg.png";

function Banner() {
  return (
    <Box
      style={{
        height: "264",
        width: "74%",
        backgroundColor: "#F1F6F4",
        display: "flex",
        justifyContent: "space-around",
       
      }}
    >
      <Box height={"264px"} width={"460px"} alignContent={"left"}>

        <Typography
          variant="h1"
          fontStyle={"Cera Pro"}
          fontSize={"30px"}
          fontWeight={"650"}
          lineHeight={"45px"}
          paddingTop={"45px"}
          textAlign={"left"}
        
        >
          Explore Books on <br></br>
          entrepreneurship
        </Typography>

        <Typography
          variant="subtitle2"
          fontStyle={"normal"}
          fontSize={"18px"}
          lineHeight={"23px"}
          color={"#6D787E"}
          paddingTop={"15px"}
          textAlign={"left"}
        >
          Everything you need to know about thriving on a<br></br>
          shoestring budget, making your first million, and hiring <br></br>
          right from the start.
        </Typography>
      </Box>

      <Box>
        <img
          src={BannerImage}
          alt="Banner Image"
          height={"230px"}
          width={"249px"}

        />
      </Box>
    </Box>
  );
}

export default Banner;
