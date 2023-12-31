import React from 'react'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import { useTodos } from '../hooks/useTodo'

const TodoApp = () => {
  const {
    todos, todosCount, pendingTodo, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()
  return (
    <>
      <h1>TodoApp: <button className='btn btn-success btn-lg'>{todosCount}</button> --<small> Pendientes: <button className='btn btn-danger btn-lg'>{pendingTodo}</button></small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={id => handleDeleteTodo(id)}
            onToggleTodo={id => handleToggleTodo(id)}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd
            onNewTodo={handleNewTodo}
          />
        </div>
      </div>
    </>
  )
}

export default TodoApp