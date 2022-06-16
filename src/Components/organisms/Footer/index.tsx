import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Icons from "../../atoms/Icons/Icons";
import Editorial from "../../molecules/Editorial";
import Logo from "../../../images/logo.svg";

function Footer() {
  return (
    <Box
      style={{
        height: "370px",
        width: "95%",
        padding:'2%',
        backgroundColor:'#F1F6F4',
        textAlign:'left'
      }}
    >
      <Box
        style={{
          height: "272px",
          width: "80%",
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          left:'150px',
          top: "10px",
        }}
      >
        <Grid
          container
          style={{ height: "272px", width: "378px"}}
        >
          <Grid item>
            <Icons source={Logo} />
            <Typography
              variant="subtitle1"
              paddingTop={"32px"}
              style={{
                fontFamily: "Cero Pro",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
                color: "#0365F2",
              }}
            >
              Big ideas in small packages <br></br>
              Start learning now
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"column"}
          style={{ height: "272px", width: "592px"}}
        >
          <Grid item>
            <Editorial
              listHead={"Editorial"}
              listingItems={[
                "Book lists",
                "What is Nonfiction?",
                "What to read next?",
                "Benefits of reding",
              ]}
            ></Editorial>
          </Grid>

          <Grid item>
            <Editorial
              listHead={"Useful links"}
              listingItems={[
                "Pricing",
                "Blinklist business",
                "Gift cards",
                "Blinklist magaine",
                "Contact & help",
              ]}
            ></Editorial>
          </Grid>

          <Grid item>
            <Editorial
              listHead={"Company"}
              listingItems={["About", "Careers", "partners", "Code of Conduct"]}
            ></Editorial>
          </Grid>
        </Grid>
      </Box>

      <Box
        style={{
          height: "24px",
          width: "600px",
          position: "relative",
          left: "150px",
          top: "30px",
        }}
        width="auto"
      >
        <Typography variant="caption" style={{
                fontFamily: "Cero Pro",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: '#6D787E',
                height:'24px',
                paddingLeft:"50px",
              }}>
        © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
