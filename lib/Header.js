import React from 'react'
import Search from './Search.js'
import './styles/Header.css'

const Header = ()=> {
  return(
    <header className="site-header"> 
      <h2> Is It Sunny In </h2>

      <Search />
    </header>
  )
}

export default Header