import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Cosme',
    email: 'cosmefulanito@gmail.com'

  })
  const { username, email } = formState
  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
    console.log({ name, value });
  }
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
      <h1>Simple Form</h1>
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
      {(username === "Cosme2") && <Message />}

    </>

  )
}

export default SimpleForm