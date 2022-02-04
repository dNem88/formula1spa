import renderer from 'react-test-renderer';
import AuthLayout from './AuthLayout'
import React from 'react'
import {
    MemoryRouter as Router
} from 'react-router-dom'
describe('test  AuthLayout component', () => {
  it('Should render Layout for login and register forms', () => {
    let layout = renderer.create(
        <Router>
             <AuthLayout/>
        </Router>
    ).toJSON()
    expect(layout).toMatchSnapshot()
    expect(layout.children.length).toBe(2)
    expect(layout.children[0].type).toBe('div')
    expect(layout.children[1].type).toBe('div')
  })
  
})