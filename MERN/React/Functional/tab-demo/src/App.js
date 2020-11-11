import React from 'react'
import './App.css';
import Tab from './components/Tab'

function App() {
  return (
    <div className="App">
    <Tab tabContent={[
                {label: "Tab 1", content: "Tab 1 Content", callback(){console.log(this.label, "was clicked")}},
                {label: "Tab 2", content: "Tab 2 Content", callback(){console.log(this.label, "was clicked")}},
                {label: "Tab 3", content: "Tab 3 Content", callback(){console.log(this.label, "was clicked")}}
                ]} />
    </div>
  );
}

export default App;
