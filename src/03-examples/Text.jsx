import React, { useLayoutEffect, useRef, useState } from 'react'

const Text = ({ body, title }) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect()
    setBoxSize({ height, width })
  }, [body])


  return (
    <>
      <blockquote className='blockquote text-end'
        style={{ display: 'flex' }}
      > <p ref={pRef} className='mb-1 '>
          {body} </p>
        <footer className='blockquote-footer'>{title}</footer>
      </blockquote>
      <code> {JSON.stringify(boxSize)}</code>
    </>

  )
}

export default Text