import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Video
from './Video'

const mockProps = {
    url: 'test-url'
}

describe('test Video', () => {
    it('Snapshot test Video component', () => {
        let component = renderer.create(
            <MemoryRouter>
                <Video url={mockProps.url}/>
            </MemoryRouter>
        ).toJSON();
        expect(component).toMatchSnapshot()
        expect(component.type).toBe('div')
        expect(component.props.className)
.toBe('player-wrapper')   
        expect(component.children.length).toBe(1)
        expect(component.children[0].type).toBe('div')
        expect(component.children[0].props.style.width).toBe('100%')
        expect(component.children[0].props.style.height).toBe('100%')
        expect(component.children[0].props.className).toBe('player')
        
 })
})