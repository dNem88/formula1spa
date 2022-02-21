import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import VerticalSlider from './VerticalSlider'



jest.mock('../../common/video/Video', () => () => 'Video')
jest.mock('../../common/videoinfo/VideoInfo', () => () => 'VideoInfo')
const mockProps = {videos: [
    {url: 'test-url', _id: 'test-id', }
]}

describe('Testing VericalSlider', () => {
    
    it('Render Properly', () => {
        const snapshot = renderer.create(
        <MemoryRouter>
            <VerticalSlider {...mockProps}/>
        </MemoryRouter>
    ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('div')
        expect(snapshot.props.className).toBe('slider')
        expect(snapshot.children.length).toBe(2)
        expect(snapshot.children[0].children[0]).toBe('More videos')
        expect(snapshot.children[1].type).toBe('div')
        expect(snapshot.children[1].props.className).toBe('relative-wrapper')
        let videosContainer = snapshot.children[1].children[0]
        expect(videosContainer.type).toBe('div')
        expect(videosContainer.props.className).toBe('slider-container-absolute')
    })
})