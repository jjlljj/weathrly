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
    this.handleSuggestionClick = this.handleSuggestionClick.bind(this)

  }

  handleBtnClick() {
    this.props.getForecast(this.state.searchValue)
    this.setState({ searchValue: "",  autoComplete: [] })
   
  }

  handleSearchChange(e) {
    let suggestions

    if (this.state.searchValue.length > 0) {
      suggestions = this.searchTrie.suggest(e.target.value.toLowerCase())

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

  handleSuggestionClick(index) {
    let suggestion = this.state.autoComplete[index]
    this.searchTrie.select(suggestion)
    this.setState({ searchValue: suggestion, autoComplete: [] })
  }

  render() {
    return (
    <div className="search-container">
      <input type="text" placeholder="Philadelphia, PA" value={this.state.searchValue} onChange={this.handleSearchChange}/>
      <button onClick={this.handleBtnClick}>GO</button>
      <ul>
      {
        this.state.autoComplete &&
        this.state.autoComplete.map((sugg, index)=> {
          return (<li key={index} onClick={()=> this.handleSuggestionClick(index)} tabIndex='1'> {sugg} </li>)
        })
      }
      </ul>
    </div>
    )
  }
}

export default Search