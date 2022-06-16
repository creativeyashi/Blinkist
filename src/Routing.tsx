import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'

import LibraryTemplate from './Components/Pages/LibraryPage';

function Routing() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LibraryTemplate />} />
          
        </Routes>
      </Router>
  )
}

export default Routing;
