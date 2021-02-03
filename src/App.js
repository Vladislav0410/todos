import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'
import Loader from './Loader'

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    const a = parseInt(prompt('How todos you want see'), 10)
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${a}`)
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 1500)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function clearTodo(id) {
    setTodos(todos.filter(todo => ""))
  }

  function addTodo(title) {
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

  const Number = (todos.filter(todos => todos.completed === false).length)

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>My To-Do List </h1>
        {todos.length ? (
          <h2>Number of To-Dos are not completed: {Number}</h2>
        ) : loading ? null : (
          <h2>No To-Do!</h2>
        )}
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? (
          <div>
            <TodoList todos={todos} onToggle={toggleTodo} />
            <button onClick={clearTodo}>Clear</button>
          </div>
        ) : loading ? null : (
          null
        )}

      </div>
    </Context.Provider>
  )
}

export default App
