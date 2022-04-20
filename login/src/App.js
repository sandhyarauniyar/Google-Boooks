import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Books from './components/Books';
import Search from './components/Search';
import Details from './components/Details';

function App() {
  
  return (
    <Routes>
    <Route exact path="/" element={<Login/>}></Route>  
    <Route exact path = "/search" element={<Search/>}></Route>
    <Route exact path = "/books" element={<Books/>}></Route>
    <Route exact path = "/details" element={<Details/>}></Route>
    </Routes>
  );
}

export default App;
