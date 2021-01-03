import './App.css';
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState(['guilherme', 'felipe'])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    setTodos([...todos, input])
    setInput('')
    e.preventDefault() // para o refresh causado pelo Submit
  }

  return (
    <div className="App">      
      <form>
        <h1>Hello App</h1>
          <input value={input} onChange={e => setInput(e.target.value)}/>
            <button type="submit" onClick={addTodo}>Add todo</button>
              <ul>
              {todos.map(todo => ( // mapeando o state todos para imprimir na li
                  <li>{todo}</li>))}
              </ul>
      </form>
    </div>
  );
}

export default App;
