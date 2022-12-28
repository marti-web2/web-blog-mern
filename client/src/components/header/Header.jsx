import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        src="https://www.siliconrepublic.com/wp-content/uploads/2020/12/AdobeStock_389071495-718x523.jpeg"
        alt="open book with light bulb shining over it"
        className="headerImg"
      />
    </div>
  )
}

export default Header
