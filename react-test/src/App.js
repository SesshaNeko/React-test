import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  var todos = [
    {id:1, completed: false, title: 'Купить хлеб'},
    {id:2, completed: false, title: 'Купить молоко'},
    {id:3, completed: false, title: 'Купить броколи'},
  ]

  function toggleTodo(id){
    todos = todos.map(todo => {
      if(todo.id === id){
        todo.completed= !todo.completed
      }
      return todo
    })
  }

  return (
    <div className='wrapper'>
      <h1>React Test</h1>
      <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
    </div>  
  )
}

export default App;
