import React from 'react'
import './styles/CurrentWeather.css'

const CurrentWeather = (props)=> {

  return ( 
    <section className="current-weather-container">  
      { props.forecast &&
        <header>
          <div>
          <img src={props.forecast.iconSrc} />
            <h4> {props.forecast.shortForecast} </h4>
          </div>
          <h1>{props.forecast.temp}&#176;F</h1>  
        </header>
      }

      { props.forecast &&
        <section> 
          <h3>{props.forecast.location}</h3>
          <h4>{props.forecast.date}</h4>
          <p>{props.forecast.textForecast}</p>

          <div className="high-low-container">
            <h3>High: {props.forecast.high}&#176;F</h3>
            <h3>Low: {props.forecast.low}&#176;F</h3>
          </div>

        </section> 
      }
    </section>
  )
}

export default CurrentWeather