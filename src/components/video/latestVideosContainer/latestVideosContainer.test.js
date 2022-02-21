import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import LatestVideosContainer from './LatestVideosContainer'


jest.mock('../VideosList/VideosList', () => () => 'VideosList')

describe('Testing LatestVideosContainer', () => {
    
    it('Render Properly', () => {
        const snapshot = renderer.create(
        <MemoryRouter>
            <LatestVideosContainer/>
        </MemoryRouter>
    ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('section')
        expect(snapshot.props.className).toBe('main-container')
    })
})