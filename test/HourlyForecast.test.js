import React from 'react'
import { mount, shallow } from 'enzyme'
import HourlyForecast from '../lib/HourlyForecast.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('App', ()=> {

  it('should exist', ()=> {
    let wrapper = shallow(<HourlyForecast />)
    expect(wrapper).toBeDefined()
  })

})