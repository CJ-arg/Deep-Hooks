import React from 'react';
import { useFetch, useCounter } from '../hooks';
import Text from '../03-examples/Text';
import LoadingText from '../03-examples/LoadingText'

export const Layout = () => {

  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
  const { body, title } = !!data && data;

  return (
    <>
      <h1>Random Quotes</h1>
      <hr />
      {
        isLoading
          ? <LoadingText />
          : <Text body={body} title={title} />
      }
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}>
        Next quote
      </button>

    </>
  )
}