import { act, renderHook } from "@testing-library/react";
import { useForm } from "../src/hooks/useForm";

describe("Test on useForm", () => {
  const initialForm = {
    name: "pedro",
    mail: "picapiedra@gmail.com",
  };
  test("should return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: "pedro",
      mail: "picapiedra@gmail.com",
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test("should change name in the form", () => {
    const inputValue = "Pablo";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: inputValue } });
    });

    expect(result.current.name).toBe(inputValue);
    expect(result.current.formState.name).toBe(inputValue);
  });
  test("should change name in the form then reset it", () => {
    const inputValue = "Pablo";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: inputValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
