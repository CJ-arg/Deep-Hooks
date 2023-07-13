import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../../src/08-useReducer/TodoItem';
describe('Test on TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
  }
  const onToggleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('should show Todo to complete', () => {
    render(<TodoItem
      todo={todo}
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />)
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
    // screen.debug()
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center ');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  })
  test('should show Todo  completed', () => {
    todo.done = true;
    render(<TodoItem
      todo={todo}
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />)
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  })
  test('should call ToggleTodo when clicked', () => {
    render(<TodoItem
      todo={todo}
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />)
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

  })
  test('should call DeleteTodo', () => {
    render(<TodoItem
      todo={todo}
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />)
    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

  })
})