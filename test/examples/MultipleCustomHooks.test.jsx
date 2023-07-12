import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks";


jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter');

describe('Test on MultipleCustomHooks', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

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
      data: [{ body: 'Pedro', title: 'Llego la data' }],
      isLoading: false,
      hasError: null
    });
    render(<MultipleCustomHooks />)
    // screen.debug()
    expect(screen.getByText('Llego la data')).toBeTruthy();
    expect(screen.getByText('Pedro')).toBeTruthy();

  })
  test('should call increment function', () => {
    useFetch.mockReturnValue({
      data: [{ body: 'Pedro', title: 'Llego la data' }],
      isLoading: false,
      hasError: null
    });
    render(<MultipleCustomHooks />)
    // screen.debug()
    const nextButton = screen.getByRole('button', { name: 'Next quote' })
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  })

})