import { Button, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import React from 'react'
import './Todo.css'
import db from './firebase'
const Todo = (props) => {
    console.log(props)
    const deleteTodo =(event) => {
        console.log("button clicked!")
        // var id = db.collection('todos').doc(props.todo.todo).getId();
        console.log(props.todo.id)
        db.collection('todos').doc(props.todo.id).delete()
        // const ref = db.collection('todos').where('todo', '==', props.todo.todo)
        // const docRefId = ref.id;
        // console.log(docRefId)

    }
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="dummy deadline!"/>
            </ListItem>
            {/* <li>{props.text}</li> */}
            <Button onClick={deleteTodo}>Delete Me:)</Button>
        </List>
    )
}

export default Todo
