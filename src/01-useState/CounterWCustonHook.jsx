import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterWCustonHook = () => {


  const { counter, increment, decrement, reset } = useCounter();
  const handleOnClick = () => {

    increment()
  }

  return (
    <>
      <h1 className="display-2">COUNTER With HOOK: {counter}</h1>

      <hr />

      <button className="btn btn-success" onClick={handleOnClick} >+1      </button>
      <button className="btn btn-success" onClick={reset} >Reset      </button>
      <button className="btn btn-success" onClick={decrement}>-1      </button>
    </>
  )
}

export default CounterWCustonHook