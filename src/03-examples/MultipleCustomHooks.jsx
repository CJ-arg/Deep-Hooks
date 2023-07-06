import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';


export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
  const { body, title } = !!data && data;

  return (
    <>
      <h1>Random Quotes</h1>
      <hr />
      {
        isLoading
          ? <div className='alert alert-info text-center'> Loading...</div>
          : <blockquote className='blockquote text-end'> <p className='mb-1 '>
            {body} </p>
            <footer className='blockquote-footer'>{title}</footer>
          </blockquote>
      }
      <button
        className="btn btn-primary"
        // disabled={isLoading}
        onClick={() => increment()}>
        Next quote
      </button>

    </>
  )
}