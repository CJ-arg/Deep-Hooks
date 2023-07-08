import React, { memo } from 'react'

const ShowIncrement = memo(({ incremnt }) => {
  console.log('me volvi a crear');
  return (
    <button className='btn btn-success'
      onClick={() => { incremnt(5) }}
    >
      Increment
    </button>
  )
})

export default ShowIncrement