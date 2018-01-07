import React from 'react'
import './styles/DailyForecast.css'
import Card from './Card.js'

const DailyForecast = (props)=> {
  return (
    <section className="daily-forecast-container">
      <h2>10 Day Forecast:</h2>
      <div className="daily-card-container">
        {
          props.forecast && 
          props.forecast.map( (day, index) => {
            return <Card forecast={ day } header={day.weekDay} key={index} />
          }) 
        }
      </div> 
    </section>
  )
}

export default DailyForecast