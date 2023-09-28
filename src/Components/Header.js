import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <nav>
      <div className='logo-right-navbar' href="#">PROCRAMMERS</div>
      <div className='content-right-navbar'>
        <ul>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Packages</a>
          <a href="#">Contact</a>
          <button>BOOK NOW</button>
        </ul>
      </div>
      </nav>
    </div>
  )
}

export default Header