import React, { useRef } from 'react'

const FocusScreen = () => {

  const inputRef = useRef()

  const OnClick = () => {
    // document.querySelector('input')?.select();
    inputRef.current.select()

  }


  return (
    <>
      <div>FocusScreen</div>

      <hr />
      <input type="text"
        placeholder='Ingrese lo que quiera '
        className='form-control'
        ref={inputRef}
      />

      <button className='btn btn-danger mt-2' onClick={OnClick}> Set Focus</button>
    </>

  )
}

export default FocusScreen