import './App.css';
import { useState } from 'react'

function App (){
  const [todos, setTodos] = useState(['guilherme', 'felipe'])


  return (
    <div className="App">
      

      <h1>Hello App</h1>
      <input />
      <button>Add todo</button>

      <ul>
      {todos.map(todo => (
          <li>{todo}</li>))}
      </ul>
    </div>
  );
}

export default App;
