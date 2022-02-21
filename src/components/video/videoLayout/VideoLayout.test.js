import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import VideoLayout from './VideoLayout'



jest.mock('../videosContainer/VideosContainer', () => () => 'VideosContainer')
jest.mock('../latestVideosContainer/LatestVideosContainer', () => () => 'LatestVideosContainer')


describe('Testing VideosLayout', () => {
    
    it('Render Properly', () => {
        const snapshot = renderer.create(
        <MemoryRouter>
            <VideoLayout/>
        </MemoryRouter>
    ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('div')
        expect(snapshot.props.className).toBe('layout')
        expect(snapshot.children.length).toBe(4)
        expect(snapshot.children[0].children[0]).toBe('Video')
        expect(snapshot.children[2].children[0]).toBe('Latest videos')
    })
})