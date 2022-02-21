import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import NewsLayout from './NewsLayout'
import newsContext from '../../../context/newsContext'

jest.mock('../../common/video/Video', () => () => 'VideoMock')
jest.mock('../../common/videoinfo/VideoInfo', () => () => 'VideoInfoMock')

describe('Testing NewsLayout', () => {
    
    it('Render Properly', () => {
        const snapshot = renderer.create(
        <MemoryRouter>
            <newsContext.Provider value={{articles: [{
                _id: 'test-id',
                imageUrl: 'test-url',
                title: 'test-title',
                hoverChange: true
            }]}}>
                <NewsLayout />
            </newsContext.Provider>
        </MemoryRouter>
    ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('section')
        expect(snapshot.props.className).toBe('wrapper')
        expect(snapshot.children[0].type).toBe('div')
        expect(snapshot.children[0].props.className).toBe('news-container')
        let section = snapshot.children[0].children[0]
        expect(section.type).toBe('section')
        expect(section.props.className).toBe('news-slider')
        expect(section.children.length).toBe(1)
    })
})