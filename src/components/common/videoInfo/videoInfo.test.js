import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import VideoInfo
from './VideoInfo'

const mockProps = {
    title: 'test-title',
    id: 'test-id',
}

describe('test VideoInfo', () => {
    it('Snapshot test VideoInfo', () => {
        let component = renderer.create(
            <MemoryRouter>
                <VideoInfo id={mockProps.id} title={mockProps.title} />
            </MemoryRouter>
        ).toJSON();
        expect(component).toMatchSnapshot()
        expect(component.type).toBe('div')
        expect(component.props.className)
.toBe('light-info')   
        expect(component.children.length).toBe(2)
        expect(component.children[0].type).toBe('p')
        expect(component.children[0].props.className).toBe('video-par')
        expect(component.children[0].children[0]).toBe('VIDEO')
        expect(component.children[1].type).toBe('p')
        expect(component.children[1].props.className).toBe('content-video-par')
        expect(component.children[1].children[0]).toBe('test-title')
 })
})