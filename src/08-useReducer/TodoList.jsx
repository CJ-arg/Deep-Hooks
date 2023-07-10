import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  console.log(todos);
  return (
    <ul className='list-group'>
      {todos.map((todo) => (<TodoItem
        key={todo.id}
        todo={todo}
        onDeleteTodo={id => onDeleteTodo(id)}
        onToggleTodo={id => onToggleTodo(id)}
      />))}
    </ul>
  )
}

export default TodoList