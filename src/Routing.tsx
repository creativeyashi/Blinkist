import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import LibraryTemplate from './Components/Pages/LibraryPage';
import HomeTemplate from './Components/Pages/HomePage';
import BookTemplate from './Components/Pages/BookPage';

function Routing() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LibraryTemplate />} />
          <Route path="/bookdetail/:bookId" element={<BookTemplate id={1} />} />
          <Route path="/books" element={<HomeTemplate /> } />
        </Routes>
      </Router>
  )
}

export default Routing;
