import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import VideoWrapper
from './VideoWrapper'

const mockProps = {
    url: 'test-url',
    id: 'test-id',
    title: 'test-title'
}

describe('test VideoWrapper', () => {
    it('Snapshot test VideoWrapper', () => {
        let component = renderer.create(
            <MemoryRouter>
                <VideoWrapper id={mockProps.id} title={mockProps.title} url={mockProps.url}/>
            </MemoryRouter>
        ).toJSON();
        expect(component).toMatchSnapshot()
        expect(component.type).toBe('div')
        expect(component.props.className)
.toBe('video-container')   
        expect(component.children.length).toBe(2)
        expect(component.children[0].type).toBe('div')
        expect(component.children[0].props.className).toBe('video-sub')
        expect(component.children[1].type).toBe('div')
        expect(component.children[1].props.className).toBe('video-info')
 })
})