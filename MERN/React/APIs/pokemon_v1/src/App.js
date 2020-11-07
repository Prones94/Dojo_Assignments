import React, { useState } from 'react'
import './App.css';

function App(props) {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=807'
  const [data, setData] = useState([])

  const handleClick = async () => {
    const pokePromise = await fetch(API_URL)
    const response = await pokePromise.json()
    setData(response.results)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Load Pokemon</button>
      {data.map((pokemon, i) =>{
        return (
          <p key={i}>{pokemon.name}</p>
        )
      })}
    </div>
  );
}

export default App;
