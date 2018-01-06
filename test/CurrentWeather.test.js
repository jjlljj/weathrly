import React from 'react'
import { mount, shallow } from 'enzyme'
import CurrentWeather from '../lib/CurrentWeather.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('App', ()=> {
  let wrapper

  beforeEach(()=> {
    wrapper = shallow(<CurrentWeather />)
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it('should not have any props by default', ()=> {
    expect(wrapper.props().forecast).toEqual(undefined)
  })

  it('should be able to take props', ()=> {
    wrapper = mount(<CurrentWeather forecast={ data.current } />)

    expect(wrapper.props().forecast).toEqual(data.current)
    expect(wrapper.props().forecast.location).toEqual(data.current.location)
    expect(wrapper.props().forecast.temp).toEqual(data.current.temp)
  })

   it('should not render child elements when no forecast is present', ()=> {
    expect(wrapper.find('section').length).toEqual(1)

    expect(wrapper.props().forecast).toEqual(undefined)
    expect(wrapper.find('header').length).toEqual(0)
    expect(wrapper.find('h4').length).toEqual(0)
    expect(wrapper.find('h3').length).toEqual(0)
    expect(wrapper.find('h1').length).toEqual(0)
    expect(wrapper.find('img').length).toEqual(0)
    expect(wrapper.find('p').length).toEqual(0)

   })

  it('should render child elements when it has a forecast ', ()=> {
    wrapper = mount(<CurrentWeather forecast={ data.current } />)

    expect(wrapper.find('header').length).toEqual(1)
    expect(wrapper.find('section').length).toEqual(2)
    expect(wrapper.find('h4').length).toEqual(2)
    expect(wrapper.find('h3').length).toEqual(3)
    expect(wrapper.find('h1').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(1)
  })

  it('should render content based on the props', ()=> {
    wrapper = mount(<CurrentWeather forecast={ data.current } />)

    expect(wrapper.props().forecast).toEqual(data.current)
    expect(wrapper.props().forecast.location).toEqual(data.current.location)

    expect(wrapper.find('h4').first().text()).toEqual(data.current.shortForecast)
    expect(wrapper.find('h1').first().text()).toEqual('55.1°F')
    expect(wrapper.find('h3').first().text()).toEqual(data.current.location)
    expect(wrapper.find('p').first().text()).toEqual(data.current.textForecast)

  })

})