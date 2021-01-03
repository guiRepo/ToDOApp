import "./App.css";
import { useState } from "react";
import Todo from './components/Todo.js'
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

const App = () => {
  const [todos, setTodos] = useState(["Levar o lixo", "Estudar react"]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    setTodos([...todos, input]);
    setInput("");
    e.preventDefault(); // para o refresh causado pelo Submit
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <FormControl>
          <InputLabel>Escreve uma Tarefa</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => ( // mapeando o state todos para imprimir na li
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
};

export default App;
