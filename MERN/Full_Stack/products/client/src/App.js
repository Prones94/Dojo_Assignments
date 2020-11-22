import React from 'react'
import './App.css';
import { Router } from '@reach/router'
import SingleProduct from './views/SingleProduct';
import Main from './views/Main';



function App() {
  return (
    <div className="App">
      <header>
        <h3>Product Manager</h3>
      </header>
      <Router>
      <Main path="/"/>
      <SingleProduct path="/:id" />
      </Router>
    </div>
  );
}

export default App;
