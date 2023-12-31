import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/ToDoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  let todosCount = 0;
  let pendingTodo = 0;
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  todosCount = todos.length;
  pendingTodo = todos.filter((todo) => !todo.done).length;
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  return {
    todos,
    todosCount,
    pendingTodo,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
