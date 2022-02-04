import React from 'react'
import renderer from 'react-test-renderer'
import {MemoryRouter} from 'react-router-dom'
import SelectForm from './SelectForm'

describe('Testing SelectForm Component', () => {
    test('snapshot match', () => {
        let Select = renderer.create(
            <MemoryRouter>
                <SelectForm/>
            </MemoryRouter>
        ).toJSON()
        expect(Select).toMatchSnapshot()
        expect(Select.type).toBe('div')
        expect(Select.children.length).toBe(2)
        expect(Select.children[0].type).toBe('a')
        expect(Select.children[1].type).toBe('a')
        expect(Select.children[0].props.href).toBeTruthy()
        expect(Select.children[1].props.href).toBeTruthy()
        expect(Select.children[0].props.className).toBeFalsy()
        expect(Select.children[1].props.className).toBeFalsy()
        expect(Select.children[0].children[0]).toBe('Sign in')
        expect(Select.children[1].children[0]).toBe('Register')
    })
})