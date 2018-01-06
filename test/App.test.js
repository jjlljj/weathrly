import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/App.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('App', ()=> {
  let wrapper

  beforeEach(()=> {
    wrapper = shallow(<App />) 
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it('should have a default forecast state of an empty object', ()=> {

    expect(wrapper.state().forecast).toEqual({})
  })

  it('should have a default lastSearch state of null', ()=> {
    expect(wrapper.state().lastSearch).toEqual(null)
  })

  it('should be able to update state', ()=> {
    expect(wrapper.state().forecast).toEqual({})
    expect(wrapper.state().lastSearch).toEqual(null)

    wrapper.setState({ forecast: data, lastSearch: data.current.location})

    expect(wrapper.state().forecast).toEqual(data)
    expect(wrapper.state().lastSearch).toEqual('San Francisco, CA')
  })

  it('should render the Header, CurrentWeather, HourlyForecast and DailyForecast components', ()=> {
    wrapper.setState({ lastSearch: 'Denver, Co'})
    expect(wrapper.state()).toEqual({ forecast: {}, lastSearch:  'Denver, Co' })

    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('CurrentWeather').length).toEqual(1)
    expect(wrapper.find('HourlyForecast').length).toEqual(1)
    expect(wrapper.find('DailyForecast').length).toEqual(1)
  })

  it('should not render the Welcome page when a previous location has been searched', ()=> {
    wrapper.setState({ lastSearch: 'Denver, Co'})
    expect(wrapper.state()).toEqual({ forecast: {}, lastSearch:  'Denver, Co' })

    expect(wrapper.find('Welcome').length).toEqual(0)
  })

  it('should render the Welcome component if no previous location has been searched', ()=> {
    wrapper.setState({ lastSearch: null }) 
    expect(wrapper.find('Welcome').length).toEqual(1)
  })

  it('should only render the welcome page when no previous location has been searched', ()=> {
    wrapper.setState({ lastSearch: null })
    expect(wrapper.state()).toEqual({ forecast: {}, lastSearch:  null })

    expect(wrapper.find('Welcome').length).toEqual(1)

    expect(wrapper.find('Header').length).toEqual(0)
    expect(wrapper.find('CurrentWeather').length).toEqual(0)
    expect(wrapper.find('HourlyForecast').length).toEqual(0)
    expect(wrapper.find('DailyForecast').length).toEqual(0)
  })

})