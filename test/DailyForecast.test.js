import React from 'react'
import { mount, shallow } from 'enzyme'
import DailyForecast from '../lib/DailyForecast.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('DailyForecast', ()=> {

  let wrapper

  beforeEach(()=> {
    wrapper = shallow(<DailyForecast />)
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it('should not have any props by default', ()=> {
    expect(wrapper.props().forecast).toEqual(undefined)
  })

  it('should be able to take props', ()=> {
    wrapper = mount(<DailyForecast forecast={ data.daily } />)

    expect(wrapper.props().forecast).toEqual(data.daily)
    expect(wrapper.props().header).toEqual(data.daily.weekDay)
  })


  it('should render child elements', ()=> {
    wrapper = mount(<DailyForecast />)

    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('h2').length).toEqual(1)
    expect(wrapper.find('Card').length).toEqual(0)
  })

  it('should not render cards when no forecast is present', ()=> {
    wrapper = mount(<DailyForecast />)

    expect(wrapper.find('Card').length).toEqual(0)
  })

  it('should render ten cards based on the forecast', ()=> {
    wrapper = mount(<DailyForecast forecast={ data.daily }/>)

    expect(wrapper.find('Card').length).toEqual(10)
  })


})