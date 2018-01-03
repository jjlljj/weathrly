import React, { Component } from 'react'
import data from './mockData.js'
import './styles/Card.css'

class Card extends Component {
  constructor() {
    super()

    // this.time = data.hourly_forecast[0].FCTTIME.civil
    // this.imgSrc = data.hourly_forecast[0].icon_url
    // this.forecastTemp = data.hourly_forecast[0].temp.english

    this.state = {
    
    }
  }

  render() {
      console.log(this.props)
    return (
      <article className="forecast-card">
        <h3>{this.props.forecast.time}</h3>
        <img src={this.props.forecast.iconSrc} />
        <h2>{this.props.forecast.temp}&#176;F</h2>

      </article>
    )
  }
}


export default Card