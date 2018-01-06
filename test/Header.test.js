import React from 'react'
import { mount, shallow } from 'enzyme'
import Header from '../lib/Header.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('Header', ()=> {
  let wrapper

  beforeEach(()=> {
    wrapper = shallow(<Header />)
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it('should not have any props by default', ()=> {
    expect(wrapper.props().getForecast).toEqual(undefined)
  })


  it('should render child elements', ()=> {
    wrapper = mount(<Header />)

    expect(wrapper.find('header').length).toEqual(1)
    expect(wrapper.find('h2').length).toEqual(1)
    expect(wrapper.find('Search').length).toEqual(1)
  })

})