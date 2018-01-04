import React, { Component } from 'react'
import './styles/App.css'
import data from './mockData.js'
import api from './api.js'
import dataHandler from './dataHandler.js'
import Header from './Header.js'
import CurrentWeather from './CurrentWeather.js'
import HourlyForecast from './HourlyForecast.js'
import DailyForecast from './DailyForecast.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      forecast: {},
      lastSearch: 'Denver, CO'
    }

    this.getForecast = this.getForecast.bind(this)
  }

  componentDidMount() {
    let city = this.lastFromStorage() || 'Denver, CO'
    this.getForecast(city)   
  }

  getForecast(city) {
    this.setState({ lastSearch: city })
    this.lastToStorage(city)

    api.getWeather(city).then( json => {
      let cleanData = dataHandler.cleanData(json)
      this.setState({ forecast: cleanData })

    })
    
  }

  lastToStorage(city) {
    localStorage.setItem('lastSearch', city)
  }

  lastFromStorage() {
    let city = localStorage.getItem('lastSearch')
    return city
  }

  render(){
    return (
      <div className='app'>
        <Header getForecast={ this.getForecast }/>
        <main>
          <CurrentWeather forecast={ this.state.forecast.current } />
          <HourlyForecast forecast={ this.state.forecast.hourly }/>
          <DailyForecast forecast={ this.state.forecast.daily }/> 
          } 
        </main>
      </div>
    )
  }
}


export default App