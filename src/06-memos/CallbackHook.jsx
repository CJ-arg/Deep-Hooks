import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

  const [counter, setCounter] = useState(10)
  const incrementFather = useCallback(
    () => {
      setCounter((value) => value + 1)

    },
    [],
  )



  return (
    <>
      <h1> useCallbasck Hook: {counter} </h1>
      <hr />
      <ShowIncrement incremnt={incrementFather} />
    </>
  )
}

export default CallbackHook