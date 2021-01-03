import './App.css';
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState(['guilherme', 'felipe'])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    console.log('funcionou')
    setTodos([...todos, input])
  }

  return (
    <div className="App">
      

      <h1>Hello App</h1>
        <input value={input} onChange={e => setInput(e.target.value)}/>
          <button onClick={addTodo}>Add todo</button>
            <ul>
            {todos.map(todo => (
                <li>{todo}</li>))}
            </ul>
    </div>
  );
}

export default App;
