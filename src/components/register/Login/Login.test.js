import renderer from 'react-test-renderer';
import Login from './Login'
import React from 'react'
import userContext from '../../../context/userContext'
import {
    MemoryRouter as Router
} from 'react-router-dom'
describe('test  Login component', () => {
  it('Should render Login form', () => {
    let loginForm = renderer.create(
        <Router>
            <userContext.Provider value={{isLogged: false}}>
                <Login />
            </userContext.Provider>
        </Router>
    ).toJSON()
    expect(loginForm.children[0].children[0].type).toBe('h2')
    expect(loginForm.children[0].children[0].children[0]).toEqual('SIGN IN')
    const loginComponent = renderer.create(
        <Router>
            <userContext.Provider value={{isLogged: false}}>
                <Login />
            </userContext.Provider>
        </Router>
    )
    const instance = loginComponent.root;
    let inputElements = instance.findAllByType('input')
    expect(inputElements.length).toBe(2)
    expect(loginForm).toMatchSnapshot()
    expect(loginForm.type).toBe('form')
    let usernameLabel1 = loginForm.children[1]
    let usernameInput1 = loginForm.children[2]
    expect(usernameLabel1.props.htmlFor).toEqual(usernameInput1.props.id)
    expect(usernameInput1.type).toBe('input')
    expect(usernameLabel1.type).toBe('label')
    let passwordLabel2 = loginForm.children[3]
    let passwordInput2 = loginForm.children[4]
    expect(passwordLabel2.props.htmlFor).toEqual(passwordInput2.props.id)
    expect(passwordInput2.type).toBe('input')
    expect(passwordLabel2.type).toBe('label')
  })
  
  
})