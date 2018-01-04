import React from 'react'
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
             return <Card forecast={ hour } key={index}/>
          }) 
        }
      </div> 
    </section>
  )
}

export default HourlyForecast