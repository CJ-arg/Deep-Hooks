import React from 'react'

const Text = ({ body, title }) => {
  return (
    <blockquote className='blockquote text-end'> <p className='mb-1 '>
      {body} </p>
      <footer className='blockquote-footer'>{title}</footer>
    </blockquote>
  )
}

export default Text