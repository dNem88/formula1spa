import React from 'react'
import renderer from 'react-test-renderer'
import Flag from './Flag'
import {MemoryRouter} from 'react-router-dom'

let mock = {
    classname: 'test-class',
    imageBase: 'test-base'
}

describe('Test Flag', () => {
    it('Should Render Properly Flag', () => {
        let flag = renderer.create(
            <MemoryRouter>
                <Flag {...mock}/>
            </MemoryRouter>
        ).toJSON()
        expect(flag).toMatchSnapshot()
        expect(flag.type).toBe('div')
        expect(flag.children.length).toBe(1)
        expect(flag.props.className).toBe(mock.classname)
        expect(flag.children[0].type).toBe('img')
    })
})