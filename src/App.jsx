import React, { useState, useEffect } from "react";
import "./App.css";
import {Link, Routes, Route} from 'react-router-dom';

import NumberDisplay from './NumberDisplay';
import CardComponent from './CardComponent'
import Welcome from "./Welcome";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Routes>
         <Route path="/number" element={ <NumberDisplay/>}>
         </Route>

         <Route path="/card" element={<CardComponent/>}>
         </Route>

         <Route path="/" element={<Welcome/>}>
         </Route>

         <Route path="*" element={<NotFound/>}>
         </Route>
      </Routes>
      
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/card'>Card</Link>
      <br/>
      <Link to='/number'>Number</Link>
      
    </div>
  );
}

export default App;