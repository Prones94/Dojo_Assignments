import React, { useState } from 'react'
import './App.css';
import Form from './components/Form/Form'

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email : "",
    password : "",
    confirmPassword : "",
  });
  return (
    <div className="Form-Container">
      <Form input={state} setInput={setState}/> 
    </div>
  );
}

export default App;
