import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
      </div>
    </Router>
  );
}

export default App;
