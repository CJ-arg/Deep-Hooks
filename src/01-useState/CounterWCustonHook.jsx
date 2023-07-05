import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterWCustonHook = () => {


  const { counter, increment, decrement, reset } = useCounter();
  const handleOnClick = () => {
    increment()
  }
  const handleOnClickDecrement = () => {
    decrement()
  }
  return (
    <>
      <h1 className="display-2">COUNTER With HOOK: {counter}</h1>

      <hr />

      <button className="btn btn-success" onClick={() => increment(2)} >+1      </button>
      <button className="btn btn-success" onClick={reset} >Reset      </button>
      <button className="btn btn-success" onClick={() => decrement(3)}>-1      </button>
    </>
  )
}

export default CounterWCustonHook