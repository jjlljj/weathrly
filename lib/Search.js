import React, { Component } from 'react'
import './styles/Search.css'

import { Trie } from '@jjlljj/complete-me'
import cities from './cities.js'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: "",
      autoComplete: []
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
    let suggestions
    if (this.state.searchValue.length > 0) {
      suggestions = this.searchTrie.suggest(this.state.searchValue.toLowerCase())

      if (suggestions && suggestions.length > 4) {
        suggestions = suggestions.slice(0,4)
      }
    } 

    this.setState({ searchValue: e.target.value, autoComplete: suggestions })

    setTimeout(()=> {
      if (!this.state.searchValue) {
        this.setState({ autoComplete: [] })
      }
    }, 2000)
  }  

  render() {
    return (
    <div className="search-container">
      <input type="text" placeholder="Philadelphia, PA" onChange={this.handleSearchChange}/>
      <button onClick={this.handleBtnClick}>GO</button>
      {
        this.state.autoComplete &&
        this.state.autoComplete.map((sugg, index)=> {
          return (<div key={index}> {sugg} </div>)
        })
      }
    </div>
    )
  }
}

export default Search