import React from 'react'
import { mount, shallow } from 'enzyme'
import HourlyForecast from '../lib/HourlyForecast.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('HourlyForecast', ()=> {

  let wrapper

  beforeEach(()=> {
    wrapper = shallow(<HourlyForecast />)
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it('should not have any props by default', ()=> {
    expect(wrapper.props().forecast).toEqual(undefined)
  })

  it('should be able to take props', ()=> {
    wrapper = mount(<HourlyForecast forecast={ data.hourly } />)

    expect(wrapper.props().forecast).toEqual(data.hourly)
    expect(wrapper.props().header).toEqual(data.hourly.weekDay)
  })


  it('should render child elements', ()=> {
    wrapper = mount(<HourlyForecast />)

    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('h2').length).toEqual(1)
    expect(wrapper.find('Card').length).toEqual(0)
  })

  it('should not render cards when no forecast is present', ()=> {
    wrapper = mount(<HourlyForecast />)

    expect(wrapper.find('Card').length).toEqual(0)
  })

  it('should render seven cards based on the forecast', ()=> {
    wrapper = mount(<HourlyForecast forecast={ data.hourly }/>)

    expect(wrapper.find('Card').length).toEqual(7)
  })


})