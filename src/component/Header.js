import React from 'react'
import '../component/style/header.css'   
import logo from "../assets/logo.png"

function Header() {

  return (
    <nav className="navbar">
      <div className='nav-left'>
        <img src={logo} alt='logo' className="logo" />
      </div>

      <div className='nav-right'>
        <button className="download-btn">Download App</button>
      </div>
    </nav>
  )
}

export default Header