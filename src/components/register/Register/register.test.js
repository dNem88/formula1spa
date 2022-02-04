import renderer from 'react-test-renderer';
import Register from './Register'
import React from 'react'
import userContext from '../../../context/userContext'
import {
    MemoryRouter as Router
} from 'react-router-dom'
describe('test  Register component', () => {
  it('Should render Register form', () => {
    let registerForm = renderer.create(
        <Router>
            <userContext.Provider value={{isLogged: false}}>
                <Register />
            </userContext.Provider>
        </Router>
    ).toJSON()
    expect(registerForm).toMatchSnapshot()
    expect(registerForm.type).toBe('form')
    expect(registerForm.children[0].children[0].type).toBe('h2')
    expect(registerForm.children[0].children[0].children[0]).toEqual('CREATE ACCOUNT')
    let usernameLabel1 = registerForm.children[1]
    let usernameInput1 = registerForm.children[2]
    expect(usernameLabel1.props.htmlFor).toEqual(usernameInput1.props.id)
    expect(usernameInput1.type).toBe('input')
    expect(usernameLabel1.type).toBe('label')
    let emailLabel2 = registerForm.children[3]
    let emailInput2 = registerForm.children[4]
    expect(emailLabel2.props.htmlFor).toEqual(emailInput2.props.id)
    expect(emailInput2.type).toBe('input')
    expect(emailLabel2.type).toBe('label')
    let passwordLabel3 = registerForm.children[5]
    let passwordInput3 = registerForm.children[6]
    expect(passwordLabel3.props.htmlFor).toEqual(passwordInput3.props.id)
    expect(passwordInput3.type).toBe('input')
    expect(passwordLabel3.type).toBe('label')
    let confirmPasswordLabel4 = registerForm.children[7]
    let confirmPasswordInput4 = registerForm.children[8]
    expect(confirmPasswordLabel4.props.htmlFor).toEqual(confirmPasswordInput4.props.id)
    expect(confirmPasswordInput4.type).toBe('input')
    expect(confirmPasswordLabel4.type).toBe('label')
  })
  
})