
import { Box, CircularProgress } from "@mui/material";
import { useMediaQuery } from 'react-responsive'
import React from "react";
import "./App.css";
import Routing from "./Routing";


function App() {
  
  return (
    <div className="App">
      { <Routing />}
      {/* <Routing></Routing> */}
    </div>
  );
}

export default App;
