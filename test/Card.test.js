import React from 'react'
import { mount, shallow } from 'enzyme'
import Card from '../lib/Card.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('Card', ()=> {

  it('should exist', ()=> {
    let wrapper = shallow(<Card forecast={data.hourly} />)
    expect(wrapper).toBeDefined()
  })

})