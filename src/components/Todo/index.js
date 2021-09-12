import React, {useEffect, useState} from 'react';
import TodoItem from "../TodoItem";
import TodoHeader from "../TodoHeader";
import axios from "axios";

const Todo = () => {
    const [todos, setTodos] = useState([
        {id: 1, title: "Выпить кофе"},
        {id: 2, title: "Сходить в магазин"}
    ])
    const [value,setValue] = useState("")
    const handleInput = (e) => {
        setValue(e.target.value)
    }
    const addTodo = () => {
        const newTodo = {
            id: todos[todos.length] ? todos[todos.length - 1].id + 1 : 1,
            title: value,
            createdAt: +new Date()
        }
        axios.post("https://613dad3b94dbd600172ab991.mockapi.io/api/todos", newTodo)
            .then(({data})=>  setTodos([...todos,newTodo]))
        setValue("")
    }
    const deleteTodo = (id) => {
        axios.delete(`https://613dad3b94dbd600172ab991.mockapi.io/api/todos/${id}`)
            .then(() => setTodos(todos.filter(el => el.id !== id)))
    }
    const saveTodo = (id,title) => {
        axios.put(`https://613dad3b94dbd600172ab991.mockapi.io/api/todos/${id}`,{title:title} )
            .then(({data}) => setTodos(todos.map(el => el.id === id ? data : el)) )
    }
    useEffect(() => {
        axios("https://613dad3b94dbd600172ab991.mockapi.io/api/todos")
            .then(({data}) => setTodos(data))
    },[])
    return (
      <div className="container">
          <div className="row justify-content-center my-5" >
              <div className="col-md-4 offset-md-4">
                  <TodoHeader value={value} handleInput={handleInput} addTodo={addTodo} lenght={todos.length} />
                  <ul className="list-group">
                      {
                          todos.map(el =>
                              <TodoItem el={el} deleteTodo={deleteTodo} saveTodo={saveTodo}/>
                               )
                      }
                  </ul>
                  <button type="button" className="btn btn-danger mt-3 w-100" onClick={()=> setTodos([])}>Clear All</button>
              </div>
          </div>
      </div>
    );
}
;

export default Todo;