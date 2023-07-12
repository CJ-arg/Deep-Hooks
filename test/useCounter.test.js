import { renderHook } from "@testing-library/react";
import { useCounter } from "../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe("Test useCounter", () => {
  test("should return default value", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  test("should return input value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(100);
  });
  test("should return increment value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, increment, reset } = result.current;
    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(103);
  });
  test("should return decrement value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, increment, reset } = result.current;
    act(() => {
      decrement();
      decrement(3);
    });
    expect(result.current.counter).toBe(96);
  });
  test("should return reseted value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, increment, reset } = result.current;
    act(() => {
      decrement();
      decrement(3);
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
