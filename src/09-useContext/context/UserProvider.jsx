import React, { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//   id: 123,
//   name: 'carlos Janon',
//   mail: 'cjmail@gmail.com'
// }


const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider