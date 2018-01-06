import React, { Component } from 'react'
import './styles/Card.css'

class Card extends Component {
  render() {
    return (
      <article className="forecast-card">
      
        <h3>{this.props.header}</h3>


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