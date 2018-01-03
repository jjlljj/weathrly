import React from 'react'
import './styles/HourlyForecast.css'
import Card from './Card.js'

let array = ['vun', 'du', 'tri', 'quar', 'sink', 'zix', 'ven']

const HourlyForecast = ()=> {
  return (
    <section className="hourly-forecast-container">
      <h2>7 Hour Forecast:</h2>
      <div className="hourly-card-container">
        {
          array.map((item, index) => {
            return <Card number={item} />
          }) 
        }
      </div> 
    </section>
  )
}

export default HourlyForecast