import { List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import React from 'react'
import './Todo.css'
const Todo = (props) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="dummy deadline!"/>
            </ListItem>
            {/* <li>{props.text}</li> */}
        </List>
    )
}

export default Todo
