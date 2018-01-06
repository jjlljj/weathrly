import React from 'react'
import { mount, shallow } from 'enzyme'
import Header from '../lib/Header.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('Header', ()=> {

  it('should exist', ()=> {
    let wrapper = shallow(<Header />)
    expect(wrapper).toBeDefined()
  })

})