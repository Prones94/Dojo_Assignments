import React from 'react'
import './App.css';
import { Router } from '@reach/router'
import HomePage from './views/HomePage/HomePage'
import New from './views/New/New'
import Edit from './views/Edit/Edit'

function App() {
  return (
    <div className="authors">
    <h1>Authors</h1>
    <Router>
      <HomePage path="/"/>
      <New path="/new"/>
      <Edit path="/edit/:id" />
    </Router>
    </div>
  );
}

export default App;
