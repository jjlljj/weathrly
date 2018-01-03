import React from 'react'
import data from './mockData.js'
import './styles/CurrentWeather.css'

const CurrentWeather = ()=> {

  let iconUrl = data.forecast.simpleforecast.forecastday[0].icon_url
  let currentTemp = data.current_observation.temp_f
  let textForecast = data.forecast.simpleforecast.forecastday[0].conditions
  let location = data.current_observation.display_location.full
  let date = data.forecast.simpleforecast.forecastday[0].date.pretty
  let highForecast = data.forecast.simpleforecast.forecastday[0].high.fahrenheit 
  let lowForecast = data.forecast.simpleforecast.forecastday[0].low.fahrenheit
  let weatherSummary = data.forecast.txt_forecast.forecastday[0].fcttext

  return (
    <section className="current-weather-container">
      <header>
        <div>
        <img src={iconUrl} />
          <h4> {textForecast} </h4>
        </div>
        <h1>{currentTemp}&#176;</h1>  
      </header>

      <section> 
        <h3>{location}</h3>
        <h4>{date}</h4>
        <p>{weatherSummary}</p>

        <div className="high-low-container">
          <h3>High: {highForecast}</h3>
          <h3>Low: {lowForecast}</h3>
        </div>

      </section>     
      
    </section>
  )
}

//need  data.forecast.simpleforecast
//&&    data.forecast.txt_forecast



//need to find current:
// city name
// --> data.current_observation.display_location.full

// condition
// --> data.forecast.simpleforecast.forcastday[0].conditions

// day
// --> data.forecast.simpleforecast.forecastday[0].date.weekday

// expected high && low for day
// --> data.forecast.simpleforecast.forecastday[0].high
// --> data.forecast.simpleforecast.forecastday[0].low

// summary of what weather will be like
// --> data.forecast.txt_forecast.forecastday[0].fcttext



//<h3>Weather in {data.current_observation.display_location.full}</h3>
  //    <h4>Conditions for {data.forecast.simpleforecast.forecastday[0].date.weekday}:</h4>
    //  <p> {data.forecast.simpleforecast.forecastday[0].conditions}</p>
      //<p>high: { data.forecast.simpleforecast.forecastday[0].high.fahrenheit } </p>
     // <p>low: { data.forecast.simpleforecast.forecastday[0].low.fahrenheit } </p>
     // <h4>Forecast:</h4>
     // <p>{ data.forecast.txt_forecast.forecastday[0].fcttext }</p>


export default CurrentWeather