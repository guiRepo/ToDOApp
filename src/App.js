import "./App.css";
import { useState, useEffect } from "react";
import Todo from "./components/Todo.js";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // carregando a aplicação ouvindo a base de dados

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().task));
    });
  }, []);

  const addTodo = (e) => {
    db.collection("todos").add({
      task: input,
    });

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
        {todos.map(( // mapeando o state todos para imprimir no componente Todo
          todo 
        ) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
