import React from 'react'
import Search from './Search.js'
import './styles/Header.css'

const Header = (props)=> {
  return (
    <header className="site-header"> 
      <h2> Is It Sunny In </h2>

      <Search getForecast={ props.getForecast }/>
    </header>
  )
}

export default Header