import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const AboutPage = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>AboutPage </h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button className='btn btn-danger'
        onClick={() => setUser({
          id: 123,
          name: 'Pedro Picapiedra',
          mail: 'cjmail@gmail.com'
        })}> Set User</button>
    </>
  )
}

export default AboutPage