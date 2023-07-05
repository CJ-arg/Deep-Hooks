import { useState } from "react";

export const useForm = (rootForm = {}) => {
  const [formState, setFormState] = useState(rootForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return {
    ...formState,
    formState,
    onInputChange,
  };
};
