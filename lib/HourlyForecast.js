import React from 'react'
import PropTypes from 'prop-types'
import './styles/HourlyForecast.css'
import Card from './Card.js'


const HourlyForecast = (props)=> {

  return (
    <section className="hourly-forecast-container">
      <h2>7 Hour Forecast:</h2>
      <div className="hourly-card-container">
        {
          props.forecast && 
          props.forecast.map( (hour, index) => {
            return <Card forecast={ hour } header={hour.time} key={index}/>
          }) 
        }
      </div> 
    </section>
  )
}

HourlyForecast.propTypes = {
  forecast: PropTypes.array
}

export default HourlyForecast