import React, { useEffect, useState } from 'react'

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  useEffect(() => {
    // console.log('message Mounted');
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      setCoords({ x, y })

    }
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      // console.log('message UnMounted');
      window.removeEventListener('mousemove', onMouseMove)

    }
  }, [])
  return (
    <>
      <h3>Ususario ya existe </h3>
      {JSON.stringify(coords)}
    </>
  )
}

export default Message