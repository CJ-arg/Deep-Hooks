import React, { useReducer } from 'react'
import { todoReducer } from './ToDoReducer'

const initialState = [{
  id: new Date().getTime(),
  description: "Recolectar la piedra del Tiempo",
  done: false,
},
{
  id: new Date().getTime() + 11,
  description: "Recolectar la piedra del Alma",
  done: false,
}
]

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  console.log(initialState);
  return (
    <>
      <h1>TodoApp: 10 --<small> Pendientes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">

          <ul className='list-group'>
            <li className='list-group-item d-flex justify-content-between'> <span className='align-self-center'> {initialState[0].id}</span> <button className='btn btn-danger btn-sm'>Borrar</button></li>
            <li className='list-group-item d-flex justify-content-between'><span className='align-self-center'> {initialState[1].id}</span> <button className='btn btn-danger btn-sm'>Borrar</button> </li>
            <li className='list-group-item d-flex justify-content-between'><span className='align-self-center'> Item 3</span><button className='btn btn-danger btn-sm'>Borrar</button> </li>
          </ul>

        </div>


        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form >
            <input type="text"
              placeholder='Ingresa una tarea para hacer?'
              className='form-control'
            />
            <button type='submit' className='btn btn-outline-primary mt-3'> AGREGAR</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default TodoApp