import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";


jest.mock('../../src/hooks/useFetch')

describe('Test on MultipleCustomHooks', () => {

  test('should show the component by default', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Random Quotes'));
    const nextButton = screen.getByRole('button', { name: 'Next quote' })
    screen.debug()
    expect(nextButton.disabled).toBeTruthy()

  });
  test('should show a quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Pedro', quote: 'Llego la data' }],
      isLoading: false,
      hasError: null
    });
    render(<MultipleCustomHooks />)
    screen.debug()
    expect(screen.getByText('Llego la data').toBeTruthy())
    expect(screen.getByText('Pedro').toBeTruthy())
  })


})