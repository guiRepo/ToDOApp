import React from "react";
import db from "../firebase";
import { List, ListItemText, ListItem, Button } from "@material-ui/core";

const Todo = (props) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="A fazer..." />
      </ListItem>
      <Button
        onClick={e => db.collection("todos").doc(props.todo.id).delete()}
      >
        Fechar Tarefa
      </Button>
    </List>
  );
};

export default Todo;
