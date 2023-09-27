import React from 'react'
import videoBg from '../Videos/background-video.mp4'
const Content = () => {
  return (
    <div className="wrapper">
      <video autoPlay loop muted playsInline>
        <source src={videoBg}/>
      </video>
      <h4>OUR PACKAGES</h4>
      <h1>Search for <u>SKIRTSKIRT</u></h1>
      <div className='search-wrapper'>
        <div>
          <p>Select your type:</p>
          <label htmlFor="types"></label>
          <select name="types" id="types">
            <option value="appartment">Appartment</option>
            <option value="bhouse">Bording House</option>
          </select>
        </div>
        <div>
          <p>Select your date:</p>
          <input type="date" />
        </div>
        <div>
          <p>Max price:</p>
          <input type="range" />
        </div>
      </div>
    </div>
  )
}

export default Content