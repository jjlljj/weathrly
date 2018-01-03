import React, { Component } from 'react'
import data from './mockData.js'
import './styles/Card.css'

class Card extends Component {
  constructor() {
    super()

    this.state = {
      
    }
  }

  render() {
    console.log(this.props)
    return (
      <article className="forecast-card">
        {
          this.props.forecast.hourly &&
          <h3>{this.props.forecast.time}</h3>
        }

        {
          this.props.forecast.daily &&
          <h3>{this.props.forecast.weekDay}</h3>
        }


        <img src={this.props.forecast.iconSrc} />

        {
          this.props.forecast.hourly &&
          <h2>{this.props.forecast.temp}&#176;F</h2>
        }

        {
          this.props.forecast.daily &&
          <div>
            <p>High: {this.props.forecast.high }&#176;F</p>
            <p>Low: {this.props.forecast.low}&#176;F</p>
          </div>
        }
        

      </article>
    )
  }
}


export default Card