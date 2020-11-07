import React, { useState, useEffect } from 'react'
import './App.css';

function App(props) {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=807'
  const [data, setData] = useState([])

  useEffect( () => {
    handleClick()  
  }, [])
  const handleClick = async () => {
    const pokePromise = await fetch(API_URL)
    const response = await pokePromise.json()
    setData(response.results)
  }

  const clearAll = e => {
    setData("")
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Load Pokemon</button>
      <button onClick={clearAll}>Clear</button>
      {data.length > 0 && data.map((pokemon, i) =>{
        return (
          <p key={i}>{pokemon.name}</p>
        )
      })}
    </div>
  );
}

export default App;
