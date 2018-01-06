import React from 'react'
import { mount, shallow } from 'enzyme'
import CurrentWeather from '../lib/CurrentWeather.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('App', ()=> {

  it('should exist', ()=> {
    let wrapper = shallow(<CurrentWeather />)
    expect(wrapper).toBeDefined()
  })

})