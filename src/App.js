import { Button, FormControl , InputLabel , Input} from '@material-ui/core';
import React , { useState ,useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase';

function App() {

  // short meomory
  // const [todos, settodos] = useState(['task1','task2']);

  const [todos, settodos] = useState([]);
  const [input, setinput] = useState('')
  // console.log(input)

  // when the app loads we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()))
      settodos(snapshot.docs.map(doc =>({id : doc.id,todo : doc.data().todo})))
    })
  }, [])


  const addTodo = (event)=>{
    // this will fire off when we click the button
    // preventing default action of refreshing
    event.preventDefault()
    console.log("inside fn")

    // db.collection('todos').add({
    //   todo : input,
    //   timestamp : firebase.firestore.FieldValue.serverTimestamp()
    // })

    db.collection("todos").add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
    // settodos([...todos,input])
    setinput('')
  }
  return (
    <div className="App">
      <h1>Be Disciplined!</h1>
      {/* wrapped in form because when we enter button it will submit */}
      <form>
        {/* <input value={input} onChange={event=>setinput(event.target.value)}/> */}
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event=>setinput(event.target.value)}/>
        </FormControl>
        <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="primary">
          Add to-do
        </Button>
        {/* <button type="submit" onClick={addTodo}>to-do</button> */}
      </form>
      
      <ui>
        {todos.map((todo)=>
           <Todo todo = {todo} />
        )}
      </ui>
    </div>
  );
}

export default App;
