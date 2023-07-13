import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import LoginPage from "../../src/09-useContext/LoginPage";

describe('Test on LoginPage', () => {
  test('should show component w no User', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  })
  test('should call setUser when button clicked', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({ "mail": "cjmail@gmail.com", "id": 123, "name": "carlos Janon" })


  });
})