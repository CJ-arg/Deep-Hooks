import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';


const HomePage = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      <h1>HomePage <small>{user?.mail}</small></h1>
      <hr />
      <pre aria-label='pre'>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button className='btn btn-info'
        onClick={() => setUser({
          id: 123,
          name: 'carlos Janon',
          mail: 'cjmail@gmail.com'
        })}> Set User</button>
    </>

  )
}

export default HomePage