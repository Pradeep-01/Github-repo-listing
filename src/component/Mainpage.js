import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maincard from './Maincard';
import Program from './Program';


const Mainpage = () => {
  
return (
  <div style={{margin:"5px", boxSizing:"border-box"}}>
    <Router>
    <Routes>
      <Route exact path="/" element={<Maincard />}/>
      <Route path="/:id" element={<Program />}/>
    </Routes>
  </Router>
  </div>
    
)
};
export default Mainpage;