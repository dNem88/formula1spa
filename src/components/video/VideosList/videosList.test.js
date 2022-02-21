import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import VideosList from './VideosList'


jest.mock('../../common/video/Video', () => () => 'VideoMock')
jest.mock('../../common/videoinfo/VideoInfo', () => () => 'VideoInfoMock')

describe('Testing VideosList', () => {
    
    it('Render Properly', () => {
        const snapshot = renderer.create(
        <MemoryRouter>
            <VideosList videos={[{_id: '1'}]}/>
        </MemoryRouter>
    ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.children.length).toBe(2)
        expect(snapshot.type).toBe('div')
        expect(snapshot.children[0]).toBe('VideoMock')
        expect(snapshot.children[1]).toBe('VideoInfoMock')
        
    })
})