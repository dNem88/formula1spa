import React from 'react'
import renderer from 'react-test-renderer'
import NewsContainer from './NewsContainer'
import {MemoryRouter} from 'react-router-dom'


const mockProps = {
    id: 'test-id',
    path: 'news',
    type: 'news',
    children: 'CHILDREN'
}
jest.fn('clickHandler')
describe('Testing NewsContainer Component', () => {
    it('render properly based on props', () => {
        const snapshot = renderer.create(
            <MemoryRouter>
                <NewsContainer {...mockProps}/>
            </MemoryRouter>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.props.className).toBe('main-container-news')
        expect(snapshot.type).toBe('div')
        expect(snapshot.children[0]).toBe('CHILDREN')
    })
    
})