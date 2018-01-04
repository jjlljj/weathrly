import apiKey from './api-key.js'

const root = 'http://api.wunderground.com/api/' + apiKey + '/conditions/forecast10day/hourly/q/'


export default {
  getWeather(city){
    let citySplit = city.split(', ')
    let cityState = citySplit[1]
    let cityName = citySplit[0]

    let url = root + cityState + '/' + cityName + '.json'

    return fetch(url).then( response => response.json() )
  },

}