import { useAuth0 } from "@auth0/auth0-react";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import Routing from "./Routing";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return (
      <Box position={"absolute"} top={"25%"} left={"50%"}>
        <CircularProgress size={"70px"}></CircularProgress>
        <Box fontSize={"25px"} fontWeight={700} position={"relative"} left={"-10px"}>
        Loading...
        </Box>
      </Box>
    );
  }
  return (
    <div className="App">
      {!isAuthenticated ? <LoginPage /> : null}
      {isAuthenticated && <Routing />}
      {/* <Routing></Routing> */}
    </div>
  );
}

export default App;
