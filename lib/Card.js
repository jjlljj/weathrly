import React, { Component } from 'react'
import data from './mockData.js'
import './styles/Card.css'

class Card extends Component {
  constructor(props) {
    super()
    // this.number = props.number
    
    this.time = data.hourly_forecast[0].FCTTIME.civil
    this.imgSrc = data.hourly_forecast[0].icon_url
    this.forecastTemp = data.hourly_forecast[0].temp.english
    this.state = {
    
    }
  }

  render() {
    return (
      <article className="forecast-card">
        <h3>{this.time}</h3>
        <img src={this.imgSrc} />
        <h2>{this.forecastTemp}&#176;F</h2>

      </article>
    )
  }
}


export default Card