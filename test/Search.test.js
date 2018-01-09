import React from 'react'
import { mount, shallow } from 'enzyme'
import Search from '../lib/Search.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('Search', ()=> {

  it('should exist', ()=> {
    let wrapper = shallow(<Search getForecast={  } />)
    expect(wrapper).toBeDefined()
  })

})