import apiKey from './api-key.js'

// eslint-disable-next-line
const root = 'http://api.wunderground.com/api/' + apiKey + '/conditions/forecast10day/hourly/q/'

export default {
  getWeather(city) {
    let location = city

    if (parseInt(city)) {
      let citySplit = city.split(', ')
      let cityState = citySplit[1]
      let cityName = citySplit[0]

      location = cityState + '/' + cityName
    }

    let url = root + location + '.json'

    return fetch(url).then( response => response.json() )
  }

}