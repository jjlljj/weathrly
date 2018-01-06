import React from 'react'
import { mount, shallow } from 'enzyme'
import Welcome from '../lib/Welcome.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('App', ()=> {

  it('should exist', ()=> {
    let wrapper = shallow(<Welcome />)
    expect(wrapper).toBeDefined()
  })

})