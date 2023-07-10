
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import { useTodos } from '../hooks/useTodo'




const TodoApp = () => {
  const {
    todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()
  return (
    <>
      <h1>TodoApp: 10 --<small> Pendientes: 2</small></h1>
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