import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex9 from './Ex9';
import App from './App';

ReactDOM.render(
    <Router>
       <App/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/ex1" element={<Ex1/>}/>
          <Route exact path="/ex2" element={<Ex2/>}/>
          <Route exact path="/ex3" element={<Ex3/>}/>
          <Route exact path="/ex4" element={<Ex4/>}/>
          <Route exact path="/ex5" element={<Ex5/>}/>
          <Route exact path="/ex6" element={<Ex6/>}/>
          <Route exact path="/ex7" element={<Ex7/>}/>
          <Route exact path="/ex8" element={<Ex8/>}/>
          <Route exact path="/ex9" element={<Ex9/>}/>
        </Routes>
      </Router>,
    document.getElementById('root')
);