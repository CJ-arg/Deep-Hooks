import { render, screen } from "@testing-library/react"
import MainApp from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router"

describe('Test on MainApp', () => {
  test('should render HomePage', () => {

    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )
    screen.debug()
    expect(screen.getByText('HomePage')).toBeTruthy()
  })
  test('should render LoginPage', () => {

    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )
    screen.debug()
    expect(screen.getByText('LoginPage')).toBeTruthy()
  })
  test('should render AboutPage', () => {

    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    )
    screen.debug()
    expect(screen.getByText('AboutPage')).toBeTruthy()
  })
  test('should render default about', () => {

    render(
      <MemoryRouter initialEntries={['/cason']}>
        <MainApp />
      </MemoryRouter>
    )
    screen.debug()
    expect(screen.getByText('AboutPage')).toBeTruthy()
  })
})