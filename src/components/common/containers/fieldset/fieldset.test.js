import React from 'react'
import renderer from 'react-test-renderer'
import Fieldset from './Fieldset'
import {screen, render} from '@testing-library/react'

const mockProps = {
    size: 'full',
    content: 'test-content',
    color: 'test-color',
    children: 'CHILDREN'
}
describe('Testing Fieldset Component', () => {
    it('render properly based on props', () => {
        const snapshot = renderer.create(
            <Fieldset {...mockProps}/>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.props.className).toBe('fieldset-full')
        expect(snapshot.type).toBe('fieldset')
        expect(snapshot.children[1]).toBe('CHILDREN')
    })
    test('Tags have correct values', () => {
        render(<Fieldset {...mockProps}/>)
        expect(screen.getByText(mockProps.content)).toBeTruthy()
        expect(screen.getByText('test-content')).toHaveClass('legend-test-color')
        
    })
})