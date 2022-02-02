import renderer from 'react-test-renderer';
import App from './App';
import React from 'react'

describe('test App component', () => {
  it('Should render app compoent', () => {
    let app = renderer.create(<App/>).toJSON()
    expect(app).toMatchSnapshot()
    expect(app[0].type).toBe('nav')
    expect(app[1].type).toBe('main')
    expect(app[2].type).toBe('footer')
  })
})