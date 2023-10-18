import React from 'react'
import './Recommended.css'
import Button from '../components/Button'

function Recommended({handleClick}) {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          <button className='btns'>All Products</button>
          <Button onClickHandler={handleClick}/>
        </div>
      </div>
    </>
  )
}

export default Recommended