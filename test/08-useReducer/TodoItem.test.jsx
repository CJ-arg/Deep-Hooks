import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../../src/08-useReducer/TodoItem';




describe('Test on TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
  }
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should show Todo to complete', () => {


    render(<TodoItem
      todo={todo}
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />)
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
    screen.debug()
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center ');
    expect(spanElement.className).not.toContain('text-decoration-line-through');



  })
})