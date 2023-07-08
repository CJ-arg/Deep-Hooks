import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...');
  }
  return `${iterationNumber} iteraciones realizadas`;
}
const MemoHook = () => {

  const { counter, increment } = useCounter(4000)
  const [show, setShow] = useState(true)

  const memoValue = useMemo(() => heavyStuff(counter), [counter])



  return (
    <>
      <h1>Counter: <small> {counter} </small></h1>

      <h3> {memoValue}</h3>
      <button className='btn btn-success' onClick={() => increment()}> Sumar</button>
      <button className='btn btn-danger'
        onClick={() => setShow(!show)}>
        Show&Hide {JSON.stringify(show)}
      </button>
    </>

  )
}

export default MemoHook