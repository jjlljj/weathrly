import React from 'react'
import './styles/HourlyForecast.css'
import Card from './Card.js'

let array = ['vun', 'du', 'tri', 'quar', 'sink', 'zix', 'ven']

const HourlyForecast = ()=> {
  return (
    <div>
      {
        array.map((item, index) => {
          console.log(item)
          return <Card number={item} />
        }) 
      }
    </div> 
  )
}

export default HourlyForecast