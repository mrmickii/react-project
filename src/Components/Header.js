import React from 'react'

const Header = () => {
  return (
    <div className="navbar">
      <div className='logo'>ProCrammers</div>
      <div className='right-navbar'>
        <ul>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Packages</a>
          <a href="#">Contact</a>
          <button>BOOK NOW</button>
        </ul>
      </div>
    </div>
  )
}

export default Header