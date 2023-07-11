import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

const LoginPage = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <h1>LoginPage </h1>

      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button className='btn btn-primary '> Set User</button>
    </>
  )
}

export default LoginPage