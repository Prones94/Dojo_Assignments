import './App.css';

function App() {
  return (
    <div className="todo-app">
      <h1 className="header">Todo App</h1>
      <h3 className="subtitle">Things I need to do:</h3>
      <ul className="todo-list">
        <li className="list-detail">Learn React</li>
        <li className="list-detail">Climb Mt. Everest</li>
        <li className="list-detail">Run a marathon</li>
        <li className="list-detail">Feed the dogs</li>
      </ul>
    </div>
  );
}

export default App;
