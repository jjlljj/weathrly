function currentWeather(data) {
  let todayWeather = data.forecast.simpleforecast.forecastday[0]

  return {  temp: data.current_observation.temp_f,
            location: data.current_observation.display_location.full,
            textForecast: data.forecast.txt_forecast.forecastday[0].fcttext,
            shortForecast: todayWeather.conditions,
            iconSrc: todayWeather.icon_url,
            date: data.current_observation.observation_time,
            high: todayWeather.high.fahrenheit,
            low: todayWeather.low.fahrenheit
          }
}

function hourlyWeather(data) {
  let forecastArray = data.hourly_forecast.slice(0, 7)

  return forecastArray.map(hour => {
    return {  time: hour.FCTTIME.civil,
              iconSrc: hour.icon_url,
              temp: hour.temp.english,
              hourly: true
            }
  }) 
}

function dailyWeather(data) {
  let forecastArray = data.forecast.simpleforecast.forecastday.slice(0, 10)
  
  return forecastArray.map(day => {
    return {  weekDay: day.date.weekday, 
              iconSrc: day.icon_url, 
              high: day.high.fahrenheit, 
              low: day.low.fahrenheit, 
              daily: true 
            }
  })
}

export default {
  cleanData(data) {
    return {  current: currentWeather(data), 
              hourly: hourlyWeather(data), 
              daily: dailyWeather(data) 
            }
  } 
}
