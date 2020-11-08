import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import './App.css';
import Home from './views/Home'
import Results from './views/Results'
import Search from './components/Search'

function App() {
  const [display, setDisplay] = useState({})
  const [homeworld, setHomeworld] = useState({})
  const [name, setName] = useState("")
  return (
    <div className="App">
    <Search
        display={display}
        setDisplay={setDisplay}
        homeworld={homeworld}
        setHomeworld={setHomeworld}
        name={name}
        setName={setName}
      />
      <Router>
        <Home exact path="/" />
        <Results
          path="/:category/:id"
          display={display}
          homeworld={homeworld}
          name={name}
        />
      </Router>
    </div>
  );
}

export default App;
