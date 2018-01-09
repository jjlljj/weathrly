import React from 'react'
import { mount, shallow } from 'enzyme'
import Search from '../lib/Search.js'
import mockData from '../__mocks__/mockData.js'
import dataHandler from '../lib/dataHandler.js'

const data = dataHandler.cleanData(mockData)
let apiReturn

describe('Search', ()=> {
  let wrapper

  beforeEach(()=> {
    wrapper = mount(<Search getForecast={ loca => { apiReturn = 'api fetch --> ' + loca } } />)
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it('should have empty searchValue and autocomplete states by default', ()=> {
    expect(wrapper.state().searchValue).toEqual("")
    expect(wrapper.state().autoComplete).toEqual([])
  })

  it('should render its elements', ()=> {
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
    expect(wrapper.find('li').length).toEqual(0)
  })

  it('should not render suggests when no string has been entered', ()=> {
    expect(wrapper.state().searchValue).toEqual("")
    expect(wrapper.state().autoComplete).toEqual([])
    expect(wrapper.find('li').length).toEqual(0)
  })

  it('should populate the search trie based on input', ()=> {
    wrapper.find('input').simulate('change', {target: {value: 'de'}})
    expect(wrapper.state().searchValue).toEqual('de')
    wrapper.find('input').simulate('change', {target: {value: 'den'}})
    expect(wrapper.state().autoComplete).toEqual( [ 'denver, co', 'denton, tx' ])
  })

  it('should render suggestions based state', ()=> {
    wrapper.find('input').simulate('change', {target: {value: 'de'}})
    wrapper.find('input').simulate('change', {target: {value: 'den'}})
    expect(wrapper.state().autoComplete).toEqual( [ 'denver, co', 'denton, tx' ])

    expect(wrapper.find('li').length).toEqual(2)
  })

  it('should change the searchValue when a suggestion is clicked', ()=> {
    wrapper.find('input').simulate('change', {target: {value: 'de'}})
    wrapper.find('input').simulate('change', {target: {value: 'den'}})
    expect(wrapper.state().autoComplete).toEqual( [ 'denver, co', 'denton, tx' ])

    expect(wrapper.find('li').length).toEqual(2)
    wrapper.find('li').first().simulate('click');

    expect(wrapper.state().autoComplete).toEqual( [])
    expect(wrapper.state().searchValue).toEqual('denver, co')
  })

  it('should search when the button is clicked', ()=> {
    wrapper.find('input').simulate('change', {target: {value: 'de'}})
    wrapper.find('input').simulate('change', {target: {value: 'den'}})
    wrapper.find('li').first().simulate('click');
    expect(apiReturn).toEqual(undefined)
    expect(wrapper.state().searchValue).toEqual('denver, co')

    wrapper.find('button').simulate('click')
    expect(apiReturn).toEqual('api fetch --> denver, co')
    expect(wrapper.state().searchValue).toEqual('')
  })

})