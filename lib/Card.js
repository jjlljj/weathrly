import React, { Component } from 'react'
import data from './mockData.js'
import './styles/Card.css'

class Card extends Component {
  constructor(props) {
    super()
    this.number = props.number
    this.state = {
    
    }
  }

  render() {
    return (
      <article> i'm article {this.number}</article>
    )
  }
}


export default Card