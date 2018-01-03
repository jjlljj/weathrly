import React from 'react'
import './styles/Search.css'

const Search = ()=> {
  return(
    <div className="search-container">
      <input type="text" placeholder="Philadelphia, PA"/>
      <button>GO</button>
    </div>
  )
}

export default Search