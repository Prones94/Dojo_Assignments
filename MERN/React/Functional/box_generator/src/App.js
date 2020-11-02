import React, { useState } from 'react'
import Form from './components/Form/Form'
import Box from './components/Box/Box'
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([])
  return (
    <div className="App">
        <Form inputs={boxes} setInputs={setBoxes} />
        <h1>All Boxes</h1>
        <div className="boxContainer">
        {boxes.map((box, idx) => {
          return (
            <div className="boxContainer" key={idx}>
              <Box inputs={box}/>
            </div>
          )
        })}
        </div>
    </div>
  );
}

export default App;
