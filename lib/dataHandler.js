function currentWeather(data) {
  let todayWeather = data.forecast.simpleforecast.forecastday[0]

  let currentTemp = data.current_observation.temp_f
  let location = data.current_observation.display_location.full
  let textForecast = data.forecast.txt_forecast.forecastday[0].fcttext
  let shortForecast = todayWeather.conditions
  let iconSrc = todayWeather.icon_url
  let date = todayWeather.date.pretty
  let high = todayWeather.high.fahrenheit
  let low = todayWeather.low.fahrenheit

  return { currentTemp, location, textForecast, shortForecast, iconSrc, date, high, low }
}

function hourlyWeather(data) {
  let forecastArray = data.hourly_forecast.slice(0, 7)
  return forecastArray.map(day => {
    let time = day.FCTTIME.civil
    let iconSrc = day.icon_url
    let temp = day.temp.english
    return { time, iconSrc, temp }
  }) 
}

function dailyWeather(data) {
  let forecastArray = data.forecast.simpleforecast.forecastday.slice(0, 10)
  
  return forecastArray.map(day => {
    let weekDay = day.date.weekday
    let iconSrc = day.icon_url
    let high = day.high.fahrenheit
    let low = day.low.fahrenheit

    return { weekDay, iconSrc, high, low }
  })

}

export default {
  cleanData(data) {
    let current = currentWeather(data)
    let hourly = hourlyWeather(data)
    let daily = dailyWeather(data)

    return { current, hourly, daily }
  } 
}


//DAILY
// forecastArray --> data.forecast.simpleforecast.forecastday[]

// day --> data.forecast.simpleforecast.forecastday[0].date.weekday
// icon_url --> data.forecast.simpleforecast.forecastday[0].icon_url
// high temp --> data.forecast.simpleforecast.forecastday[0].high.fahrenheit
// low temp --> data.forecast.simpleforecast.forecastday[0].low.fahrenheit



