import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import VideosContainer from './VideosContainer'


jest.mock('../verticalSlider/VerticalSlider', () => () => 'VerticalSlider')


describe('Testing VideosContainer', () => {
    
    it('Render Properly', () => {
        const snapshot = renderer.create(
        <MemoryRouter>
            <VideosContainer videos={'test-value'}/>
        </MemoryRouter>
    ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('div')
        expect(snapshot.props.className).toBe('main-container')
    })
})