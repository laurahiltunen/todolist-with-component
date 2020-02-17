import React, {useState} from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function App() {
const [todo, setTodo] = useState({desc: '', date: ''});
const [todos, setTodos] = useState([]);


const addTodo = (event) => {
  event.preventDefault();
  setTodos([...todos, todo]);
}

const inputChanged = (event) => {
  setTodo({...todo, [event.target.name]: event.target.value});
}

const deleteTodo = (event) => {
  event.preventDefault();
  setTodos(todos.filter((todo, index) => index !== parseInt(event.target.id)));
}

const columns = [
  {},
  {}
]


return (
 
  <div className = "App">
    <h1>Simple todolist</h1>
    <form onSubmit = {addTodo}>
      Description:
      <input type = "text" name = "desc" value = {todo.desc} onChange = {inputChanged}/>
      Date:
      <input type = "date" name = "date" value = {todo.date} onChange = {inputChanged}/>
      <input type = "submit" value = "Add"/>
    </form>
     <ReactTable data = {todos} columns = {columns} />
  </div>
  );
}

export default App;