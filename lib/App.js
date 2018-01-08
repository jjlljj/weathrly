import React, { Component } from 'react'
import './styles/App.css'
import api from './api.js'
import dataHandler from './dataHandler.js'
import Header from './Header.js'
import Welcome from './Welcome.js'
import CurrentWeather from './CurrentWeather.js'
import HourlyForecast from './HourlyForecast.js'
import DailyForecast from './DailyForecast.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      forecast: {},
      lastSearch: null
    }

    this.getForecast = this.getForecast.bind(this)
  }

  componentDidMount() {
    let city = this.lastFromStorage() 

    this.getForecast(city)
    this.setState({ forecastFound: true })
  }

  getForecast(city) {
    api.getWeather(city).then( json => {

      let cleanData = dataHandler.cleanData(json)
      
      if (cleanData) {
        this.lastToStorage(cleanData.current.location)     
        this.setState({ 
          lastSearch: cleanData.current.location, 
          forecast: cleanData,
          forecastFound: true 
        })
      } 
    })
    .catch(()=> {
      this.setState({ forecastFound: false })
      setTimeout(()=> {
        this.setState({ forecastFound: true })
      }, 2500)
    })    
  }

  lastToStorage(city) {
    localStorage.setItem('lastSearch', city)
  }

  lastFromStorage() {
    let city = localStorage.getItem('lastSearch')

    return city
  }

  render() {
    return (
      <div>
      { !this.state.lastSearch &&
        <div className='app'>
          <Welcome getForecast={ this.getForecast } />
        </div>
      }
      
      { 
        this.state.lastSearch &&
        <div className='app'>
          <Header getForecast={ this.getForecast }/>        
          <div className='main-container'>
          {
            !this.state.forecastFound &&
            <span className="not-found">forecast data not available for that location</span>
          }
            <CurrentWeather forecast={ this.state.forecast.current } />
            <HourlyForecast forecast={ this.state.forecast.hourly } />
            <DailyForecast forecast={ this.state.forecast.daily } /> 
          </div>
        </div>
      }

    </div>  
    )
  }
}


export default App