import React, { useState } from  'react'
import UserForm from './components/UserForm/UserForm'
import Clone from './components/Clone/Clone'
import './App.css';

function App() {
  const [state,setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:  "",
    confirmPassword: "",
  });
  
  return (
    <div className="Form-Container">
    <UserForm input = {state} setInput={setState}/>
    <Clone data={state}/>
    </div>
  );
}

export default App;
