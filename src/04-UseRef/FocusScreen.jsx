import React from 'react'

const FocusScreen = () => {
  const OnClick = () => {
    document.querySelector('input')?.select();
  }


  return (
    <>
      <div>FocusScreen</div>

      <hr />
      <input type="text"
        placeholder='Ingrese lo que quiera '
        className='form-control' />
      <input type="text"
        placeholder='Ingrese lo que quiera '
        className='form-control' />
      <input type="text"
        placeholder='Ingrese lo que quiera '
        className='form-control' />
      <input type="text"
        placeholder='Ingrese lo que quiera '
        className='form-control' />
      <button className='btn btn-danger mt-2' onClick={OnClick}> Set Focus</button>
    </>

  )
}

export default FocusScreen