import apiKey from './api-key.js'

const root = 'http://api.wunderground.com/api/' + apiKey + '/conditions/forecast10day/hourly/q/'


export default {
  getWeather(city){
    console.log(city)
    let url = root + '/CO/Denver.json'
    return fetch(url).then( response => response.json() )
  },

}