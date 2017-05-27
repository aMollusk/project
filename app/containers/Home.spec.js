import React from 'react'



import { shallow } from 'enzyme'
import Home from './Home'

const wrapper = shallow(<Home />)


describe('Home container', () => {
    it('should render the Home container successfully', () => {
        expect(wrapper.text()).toBe('hello')
    })
})