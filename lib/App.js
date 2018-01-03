import React, { Component } from 'react'
import './styles/App.css'
import data from './mockData.js'
import Header from './Header.js'
import CurrentWeather from './CurrentWeather.js'
import HourlyForecast from './HourlyForecast.js'
import DailyForecast from './DailyForecast.js'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <CurrentWeather />
        <HourlyForecast />
        <DailyForecast />
      </main>
    </div>
  )
}

// function getData(number, categoryId) {
//   const root = 'https://opentdb.com/api.php'
//   const url = `${root}?amount=${number}&category=${categoryId}&type=multiple`
//   const promise = fetch(url)
//   .then(data => data.json())
  
//   return promise;
// }

// getTrivia(10, 27)
// .then(data => console.log(data))
// .catch(err => /* do something else */);




export default App