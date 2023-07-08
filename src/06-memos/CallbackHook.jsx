import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

  const [counter, setCounter] = useState(10)
  const incrementFather = useCallback(
    (value) => {
      setCounter((c) => c + value)

    },
    [],
  )

  useEffect(() => {
    // incrementFather();
  }, [incrementFather])

  return (
    <>
      <h1> useCallbasck Hook: {counter} </h1>
      <hr />
      <ShowIncrement incremnt={incrementFather} />
    </>
  )
}

export default CallbackHook