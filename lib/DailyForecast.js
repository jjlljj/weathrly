import React from 'react'
import './styles/DailyForecast.css'
import Card from './Card.js'

let dailyArray = ['vun', 'du', 'tri', 'quar', 'sink', 'zix', 'ven', 'et', 'neen', 'den']

const DailyForecast = ()=> {
  return (
    <section className="daily-forecast-container">
      <h2>10 Day Forecast:</h2>
      <div className="daily-card-container">
        {
          dailyArray.map((item, index) => {
            return <Card number={item} />
          }) 
        }
      </div> 
    </section>
  )
}

export default DailyForecast