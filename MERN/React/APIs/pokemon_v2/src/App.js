import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState([])
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=807'

  const handleClick = async () => {
    const pokemon = await axios.get(API_URL)
    setData(pokemon.data.results)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Search</button>
      {data.map((pokemon, i) => (
        <p key={i}>{pokemon.name}</p>
      ))}
    </div>
  );
}

export default App;
``