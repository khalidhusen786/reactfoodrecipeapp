import React from 'react'
import './style.css'


function Header() {
  return (
    <div className='container'>
       
        <div className='header'>
        <img src='./foodlogo.png' alt=''/>
      <input type="text" placeholder='Search Your Meal' ></input>
      </div>
    </div>
  )
}

export default Header