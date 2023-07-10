import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return
    const newTodo =
    {
      id: new Date().getTime(),
      description: description,
      done: false
    }
    onNewTodo && onNewTodo(newTodo)
    onResetForm()
  }
  return (
    < form onSubmit={onFormSubmit}  >
      <input type="text"
        placeholder='Ingresa una tarea para hacer?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button type='submit' className='btn btn-outline-primary mt-3'> AGREGAR</button>
    </form>
  )
}

export default TodoAdd