import React from 'react'
import { mount, shallow } from 'enzyme'
import Card from '../lib/Card.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)

describe('Card', ()=> {

let wrapper

  beforeEach(()=> {
    wrapper = mount(<Card forecast={ data.hourly[0]} header={data.hourly[0].time}/>)
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it('should take props', ()=> {
    expect(wrapper.props().header).toEqual(data.hourly[0].time)
  })

  it('should render child elements', ()=> {
    expect(wrapper.find('article').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('h3').length).toEqual(1)
  })

  it('should render hourly card content', ()=> {
    
    expect(wrapper.find('h2').length).toEqual(1)
    expect(wrapper.find('h3').first().text()).toEqual(data.hourly[0].time)
    expect(wrapper.find('h2').first().text()).toEqual("54°F")

    expect(wrapper.find('h3').first().text()).not.toEqual(data.daily[0].weekDay)
    expect(wrapper.find('p').length).toEqual(0)
  })

  it('should render daily card content', ()=> {
    wrapper = mount(<Card forecast={ data.daily[0]} header={data.daily[0].weekDay}/>)
    
    expect(wrapper.find('h3').first().text()).toEqual(data.daily[0].weekDay)
    expect(wrapper.find('p').first().text()).toEqual("High: 62°F")

    expect(wrapper.find('h2').length).toEqual(0)
    expect(wrapper.find('h3').first().text()).not.toEqual(data.hourly[0].time)
  })
 
  

})