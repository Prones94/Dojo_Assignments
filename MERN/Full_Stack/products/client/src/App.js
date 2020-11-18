import React from 'react'
import './App.css';
import { Router } from '@reach/router'

import NewProduct from './views/NewProduct'
import SingleProduct from './views/SingleProduct';
import EditProduct from './views/EditProduct';



function App() {
  return (
    <div className="App">
      <header>
        <h3>Product Manager</h3>
      </header>
      <Router>
      <NewProduct path="/"/>
      <SingleProduct path="/:id" />
      <EditProduct path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
