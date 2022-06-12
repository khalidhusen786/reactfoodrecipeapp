import React from 'react'
import './style.css'


function Header() {
  return (
    <div className='container'>
       
        <div className='header'>
        <img src='./foodlogo.png' alt=''/>
      <input type="text" placeholder='Search Your Meal' ></input>
      <div class="category">
        <span>
            <img src='./americanfood1.png' alt=''/>
            <figcaption>American</figcaption>
        </span>
        <span>
            <img src='./indianfood.png' alt=''/>
            <figcaption>Indian</figcaption>
            
        </span>
        <span>
        <img src='./chinesefood.png' alt=''/>
            <figcaption>Chinese</figcaption>
        </span>
        <span>
        <img src='./nepalifood.png' alt=''/>
            <figcaption>Nepali</figcaption>
        </span>

      </div>
      </div>
    </div>
  )
}

export default Header