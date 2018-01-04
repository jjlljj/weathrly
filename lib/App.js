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
      forecast: {}
    }

    this.getForecast = this.getForecast.bind(this)
  }

  componentDidMount() {
    // let cleanData = dataHandler.cleanData(data)
    //   this.setState({ forecast: cleanData })
    this.getForecast()

    
  }

  getForecast(city) {
    api.getWeather().then( json => {
      let cleanData = dataHandler.cleanData(json)
      this.setState({ forecast: cleanData })
    })
    
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