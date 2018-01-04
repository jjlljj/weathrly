import React, { Component } from 'react'
import './styles/Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ""
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)

  }

  handleBtnClick() {
    this.props.getForecast(this.state.searchValue)
  }

  handleSearchChange(e) {
    this.setState({searchValue: e.target.value})
  }  

  render() {
    return (
    <div className="search-container">
      <input type="text" placeholder="Philadelphia, PA" onChange={this.handleSearchChange}/>
      <button onClick={this.handleBtnClick}>GO</button>
    </div>
    )
  }
}

export default Search