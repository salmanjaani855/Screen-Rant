import React from 'react'
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Navbar'
import Homepage from './Homepage'
import Exclusive from './Exclusive'
import ActorPage from './ActorPage'
import Review from './Review'
import Formpage from './Formpage';

const App = () => {
  return (
       <>
      {/* Default mein signin button show hoga */}
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Navbar showSignIn={true} />
              <Homepage />
            </>
          }
        />
        <Route
          path="/actorpage"
          element={
            <>
              <Navbar showSignIn={false} />
              <ActorPage />
            </>
          }
        />
        <Route
          path="/exclusive"
          element={
            <>
              <Navbar showSignIn={true} />
              <Exclusive />
            </>
          }
        />
        <Route
          path="/review"
          element={
            <>
              <Navbar showSignIn={false} />
              <Review />
            </>
          }
        />
        <Route path="/formpage" element={<> <Navbar/> <Formpage /> </>} />
      </Routes>
       
    </>
  );
}

export default App
