import React from 'react'
import renderer from 'react-test-renderer'
import CommonHeader from './CommonHeader'
import {render, screen} from '@testing-library/react'


const mockProps = {
    header: 'test-header',
    description: 'test-description'
}

describe('Common Header Based on Props',() => {
    it('Match Snapshot', () => {
        const snapshot = renderer.create(
            <CommonHeader {...mockProps}/>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
    })
    it('Elements text content', () => {
        render(<CommonHeader {...mockProps}/>)
       expect(screen.getByText(mockProps.header)).toBeTruthy()
       expect(screen.getByText(mockProps.description)).toBeTruthy()
        
    })
})