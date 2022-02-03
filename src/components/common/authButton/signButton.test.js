import React from 'react'
import renderer from 'react-test-renderer';
import SignButton from './SignButton'
import {MemoryRouter, Link} from 'react-router-dom'

describe('Sign up /Sign in in button test ', () => {
    
    it('Should redirect to Login Page', () => {
        let linkComp = renderer.create(
            <MemoryRouter>
                <SignButton textContent={'Sign in'} href={'/login'}/>
            </MemoryRouter>
        ).toJSON();
        expect(linkComp).toMatchSnapshot();
        expect(linkComp.props.href).toBe('/login');
        expect(linkComp.props.className).toBe('link');
    })
    it('Should redirect to Login Page', () => {
        let linkComp = renderer.create(
            <MemoryRouter>
                <SignButton textContent={'Sign up'} href={'/register'}/>
            </MemoryRouter>
        ).toJSON();
        expect(linkComp).toMatchSnapshot();
        expect(linkComp.props.href).toBe('/register');
        expect(linkComp.props.className).toBe('link');
    })
})