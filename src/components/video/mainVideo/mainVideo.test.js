import React from 'react'
import {MemoryRouter, Outlet, useOutletContext} from 'react-router-dom'
import renderer from 'react-test-renderer'
import MainVideo from './MainVideo'



jest.mock('../../common/video/Video', () => () => 'Video')
jest.mock('../../common/videoinfo/VideoInfo', () => () => 'VideoInfo')


describe('Testing MainVideo', () => {
    
    it('Render Properly', () => {
        const snapshot = renderer.create(
        <MemoryRouter>
            <Outlet context={{mainVideo: 'mock'}}>
                <MainVideo context={{mainVideo: 'mock'}}/>
            </Outlet>
        </MemoryRouter>
    ).toJSON()
        expect(snapshot).toMatchSnapshot()
        // expect(snapshot.type).toBe('section')
        // expect(snapshot.props.className).toBe('main-container')
    })
})