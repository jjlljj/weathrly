import React from 'react'
import PropTypes from 'prop-types'
import Search from './Search.js'
import './styles/Welcome.css'

const Welcome = (props)=> {
  return (
    <div className="welcome"> 
      <div className="welcome-content">
        <h2> Is It Sunny In </h2>
        <Search getForecast={ props.getForecast }/>
      </div>
    </div>
  )
}

Welcome.propTypes = {
  getForecast: PropTypes.func
}

export default Welcome