import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
import About from './About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='contact/' element={<Contact/>}/>
          <Route path='about/' element={<About/>}/>
        </Routes>
      </Router>
    )
  }
}
