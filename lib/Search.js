import React, { Component } from 'react'
import './styles/Search.css'

import { Trie } from '@jjlljj/complete-me'
import cities from './cities.js'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ""
    }

    this.searchTrie = new Trie()
    this.searchTrie.populate(cities.data)

    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)

  }

  handleBtnClick() {
    this.props.getForecast(this.state.searchValue)
  }

  handleSearchChange(e) {
    if (this.state.searchValue.length > 1) {
      let suggestions = this.searchTrie.suggest(this.state.searchValue)
      console.log(suggestions)
    }
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