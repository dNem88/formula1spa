import React from 'react'
import renderer from 'react-test-renderer'
import ConstructorsPoints from './ConstructorsPoints'
import {MemoryRouter} from 'react-router-dom'
import {screen, render} from '@testing-library/react'

const mockProps = {
    position: '7',
    constructor: 'Mercedes',
    nationality: 'German',
    points: '100'
}
describe('Testing Constructor Points Component', () => {
    it('render properly based on props', () => {
        const snapshot = renderer.create(
            <MemoryRouter>
                <ConstructorsPoints {...mockProps}/>
            </MemoryRouter>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.props.className).toBe('driver-row')
        expect(snapshot.type).toBe('div')
    })
    test('p-tags have correct values', () => {
        render(<ConstructorsPoints {...mockProps}/>)
        expect(screen.getByText(mockProps.points)).toBeTruthy()
        expect(screen.getByText(mockProps.nationality)).toBeTruthy()
        expect(screen.getByText(mockProps.constructor)).toBeTruthy()
        expect(screen.getByText(mockProps.position)).toBeTruthy()
        
    })
})