import React from 'react'
import { mount, shallow } from 'enzyme'
import Card from '../lib/Card.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('Card', ()=> {

let wrapper

  beforeEach(()=> {
    wrapper = shallow(<Card />)
  })

  it.skip('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it.skip('should not have any props by default', ()=> {
    expect(wrapper.props().forecast).toEqual(undefined)
  })

  it.skip('should be able to take props', ()=> {
    wrapper = mount(<Card forecast={ data.hourly } />)

    expect(wrapper.props().forecast).toEqual(data.hourly)
    expect(wrapper.props().header).toEqual(data.hourly.weekDay)
  })


  it.skip('should render child elements', ()=> {
    wrapper = mount(<Card />)

    // expect(wrapper.find('section').length).toEqual(1)
    // expect(wrapper.find('h2').length).toEqual(1)
    // expect(wrapper.find('Card').length).toEqual(0)
  })

  it.skip('should not render cards when no forecast is present', ()=> {
    // wrapper = mount(<Card />)

    // expect(wrapper.find('Card').length).toEqual(0)
  })

  it.skip('should render seven cards based on the forecast', ()=> {
    // wrapper = mount(<Card forecast={ data.hourly }/>)

    // expect(wrapper.find('Card').length).toEqual(7)
  })


  

})