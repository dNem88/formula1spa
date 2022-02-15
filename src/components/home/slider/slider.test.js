import React from 'react'
import renderer from 'react-test-renderer'
import Slider from './Slider'
import {MemoryRouter} from 'react-router-dom'


describe('Test Slider', () => {
    it('Should Render Properly Slider', () => {
        let slider = renderer.create(
            <MemoryRouter>
                <Slider />
            </MemoryRouter>
        ).toJSON()
        expect(slider).toMatchSnapshot()
        expect(slider.type).toBe('div')
        expect(slider.props.className).toBe('slider')
    })
})