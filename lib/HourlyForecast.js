import React from 'react'
import './styles/HourlyForecast.css'
import Card from './Card.js'


const HourlyForecast = (props)=> {
  let hourlyArray = props.forecast || []
  return (
    <section className="hourly-forecast-container">
      <h2>7 Hour Forecast:</h2>
      <div className="hourly-card-container">
        {
          console.log(hourlyArray)
          // hourlyArray.map( hour => {
          //     console.log('hello')
          //   // return <Card forecast={ hour } />
          // }) 
        }
      </div> 
    </section>
  )
}

export default HourlyForecast