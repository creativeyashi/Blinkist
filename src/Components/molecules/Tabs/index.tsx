import { makeStyles } from "@material-ui/core";
import { Box, StyledEngineProvider, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import CardsList from "../CardsList";

const useStyles = makeStyles({
  tabsclass: {
    width: "304px",
    height: "23px",

    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "23px",

    alignItems: "flex-start",
    textTransform: "none",

    "&:focus": {
      color: "#22C870",
    },
  },
});

function TabsComponent() {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <StyledEngineProvider injectFirst>
      <TabContext value={value} data-testid={"tab-context"}>
        <Box width="91%" position={"relative"} left="7%">
          <TabList
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2CE080",
              },
            }}
          >
            <Tab
              label="Currently Reading"
              value="1"
              className={classes.tabsclass}
              data-testid={"reading-tab"}
            />
            <Tab label="Finished" value="2" className={classes.tabsclass} data-testid={"finished-tab"}/>
          </TabList>
        </Box>
        <TabPanel value="1" data-testid={"tab-panel1"}>
          <CardsList finished={true} checkComplete={31}></CardsList>
        </TabPanel>
        <TabPanel value="2" data-testid={"tab-panel2"}>
        <CardsList readAgain={true} checkComplete={100}></CardsList>
        </TabPanel>
      </TabContext>
    </StyledEngineProvider>
  );
}

export default TabsComponent;
