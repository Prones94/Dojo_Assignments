import React, { useState } from 'react'
import './App.css';
import Tab from './components/Tabs/Tab';

function App() {
  const [tabs, setTabs] = useState([
    {
      label: "Tab 1",
      content: "This is the content for Tab 1",
      isSelected: false
    },
    {
      label: "Tab 2",
      content: "This is the content for Tab 2",
      isSelected: false
    },
    {
      label: "Tab 3",
      content: "This is the content for Tab 3",
      isSelected: false
    }
  ])

  const alltabs = tabs.map((tab, idx) => <Tab idx={idx} label={tab.label} tabs={tabs} setTabs={setTabs}/>)
  let tabContent = tabs.map(tab => tab.isSelected && <p>{tab.content}</p>)

  return (
    <div className="App">
      <div className="tabHeader">
        {alltabs}
      </div>
      <div className="tabContent">
        {tabContent}
      </div>
    </div>
  );
}

export default App;
