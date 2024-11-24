import React from 'react'
import "./component.css"
const Entete = () => {
  return (
    <div className="navbar">
      <h1>A-Book</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Author</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <div className="searchBox">
        <input type="text" name="searchinput" placeholder='Search' id="searchinput"  className='searchinput'/>
        <button><img className='imagesearch' src="chercher.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Entete