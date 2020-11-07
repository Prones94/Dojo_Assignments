import React from 'react'
import { Router } from '@reach/router'
import Home from './views/Home'
import Word from './views/Word'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Home path="/home"/>
      <Word path="/:word"/>
      <Word path="/:word/:color/:background" />
    </Router>
    </div>
  );
}

export default App;
