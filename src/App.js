import "./App.css";
import { useState, useEffect } from "react";
import firebase from "firebase";
import Todo from "./components/Todo.js";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // carregando a aplicação ouvindo a base de dados

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // criando a colletion "todo" e listando os todo's criados (iniciando com nada)
        setTodos(snapshot.docs.map((doc) => doc.data().task));
      });
  }, []);

  const addTodo = (e) => {
    db.collection("todos").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

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
        {todos.map((
          // mapeando o state todos para imprimir no componente Todo
          todo
        ) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
