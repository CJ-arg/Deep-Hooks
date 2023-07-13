import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import HomePage from "../../src/09-useContext/HomePage";

describe('Test on HomePage', () => {
  test('should show component w out User', () => {
    const user = {
      id: 1,
      name: 'Carlos'
    }
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    screen.debug()
  });
  test('should show component with User', () => {
    const user = {
      id: 1,
      name: 'Carlos'
    }
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); // aria-label
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
    screen.debug()
  });

})