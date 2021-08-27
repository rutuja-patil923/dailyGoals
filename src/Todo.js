import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal} from '@material-ui/core'
import React , { useState }from 'react'
import './Todo.css'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper : {
        position: 'absolute',
        width : 400,
        backgroundColor : theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}))

const Todo = (props) => {

    const [open, setopen] = useState(false)
    const classes = useStyles()
    const [input, setinput] = useState('')

    const handleOpen = () => {
        setopen(true)
    }
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

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo : input 
        },{merge:true})
        setopen(false)
        setinput('')
    }


    return (
        <>
            <Modal open={open} onClose={e => setopen(false)}  >
            {/* {body} */}
                <div className={classes.paper}>
                    <h1>I'm Modal</h1>
                    <input placeholder={props.todo.todo} value={input} onChange = {event => setinput(event.target.value)}/>
                    <Button onClick={updateTodo}>Dummy</Button>
                </div>
            </Modal>
            
            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Timeline"/>
                </ListItem>
                {/* <li>{props.text}</li> */}
                {/* <Button onClick={deleteTodo}>Delete Me</Button> */}
                <button onClick={e => setopen(true)}>Edit</button>
                <DeleteIcon onClick={deleteTodo}/>
            </List>
        </>
        
    )
}

export default Todo
