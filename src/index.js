import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Mainpage from './Mainpage';
import Login from './Login';
ReactDOM.render(
  <Router>
    <Routes> 
      <Route path="/" element={<Login/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Mainpage" element={<Mainpage />} />
    </Routes>
  </Router>,
  

  document.getElementById('root')
);