import React, {useState} from "react";
import db from "../firebase";
import { List, ListItemText, ListItem, Button, Modal } from "@material-ui/core";

const Todo = (props) => {

const [open, setOpen] = useState(false)
const [input, setInput] = useState('')

  const handleOpen = () =>{
    setOpen(true)
  }
  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      task: input
    }, { merge: true })

    setOpen(false)
  }

  return (
    <>
      <Modal open={open} onClose={e => setOpen(false)}>
        <div>
          <h1>
            Im modal
          </h1>
          <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
          <button onClick={updateTodo}>Atualizar Tarefa</button>
        </div>

      </Modal>


    <List>
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="A fazer..." />
      </ListItem>
      <Button onClick={e => setOpen(true)}>Edit</Button>
      <Button onClick={e => db.collection("todos").doc(props.todo.id).delete()}>
        Fechar Tarefa
      </Button>
    </List>
    </>
  );
};

export default Todo;
