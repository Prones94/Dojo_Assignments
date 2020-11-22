import React from 'react'
import './App.css';
import { Link, Router, Redirect } from '@reach/router'

function App() {
  return (
    <div className="container">
      <nav className="container__nav">
        <Link to="/players/list">All Players</Link>
        <Link to="/status/game/1">Manage Player Status</Link>
      </nav>
      <Router>
      
      </Router>
      <Redirect from="/" to="/players/list" noThrow="true" />
    </div>
  );
}

export default App;
