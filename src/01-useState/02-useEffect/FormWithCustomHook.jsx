import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';


const FormWithCustomHook = () => {

  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''

  })
  // const { username, email, password } = formState

  useEffect(() => {
    // console.log("useEffect called be formState");
  }, [formState]);
  useEffect(() => {
    // console.log("useEffect called ");
  }, []);
  useEffect(() => {
    // console.log("useEffect called by email");
  }, [email]);


  return (
    <>
      <h1>Form With Custom Hook</h1>
      <input type="text"
        className='form-control'
        placeholder='User name'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input type="email"
        className='form-control mt-2'
        placeholder='xxxxxxxxx@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      <input type="password"
        className='form-control mt-2'
        placeholder='password'
        name='password'
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className='btn btn-success mt-2'>Reset</button>

    </>

  )
}

export default FormWithCustomHook