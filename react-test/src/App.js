import React from "react"
import TodoList from "./Todo/TodoList"
import Context from "./context"
import AddTodo from "./Todo/AddTodo"

function App() {
  const [todos, setTodos] =  React.useState([
    {id:1, completed: false, title: 'Купить хлеб'},
    {id:2, completed: false, title: 'Купить молоко'},
    {id:3, completed: false, title: 'Купить броколи'},
    ])
  

  function toggleTodo(id){
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
        todo.completed= !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo=>todo.id !==id))
  }

  function addTodo(title){
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>React Test</h1>

        <AddTodo onCreate={addTodo}/>

        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo}></TodoList>) : (<p>NO TODOS!</p>)}

        
      </div>  
    </Context.Provider>
  )
}

export default App;
