import React from "react"
import  { List, ListItemText, ListItem } from "@material-ui/core"


const Todo = (props) => {
  return (
    
      <List>
        <ListItem>
          <ListItemText primary={props.text} secondary="A fazer..." />
        </ListItem>
      </List>
        
  )};

export default Todo;
