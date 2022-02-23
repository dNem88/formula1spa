import React from 'react'
import renderer from 'react-test-renderer'
import DriverPoints from './DriverPoints'
import { MemoryRouter } from 'react-router-dom'
const mockProps = {
    driver: 'Lewis Hamilton',
    position: 2,
    team: 'Mercedes',
    points: 100
}

describe('Testing DriverPoints', () => {
    it('Render data properly', () => {
        const snapshot = renderer.create(
            <MemoryRouter>
                <DriverPoints {...mockProps}/>
            </MemoryRouter>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('div')
        expect(snapshot.props.className).toBe('driver-row')
        expect(snapshot.children[0].type).toBe('p')
        expect(snapshot.children[0].children[0]).toBe('2')
        expect(snapshot.children[2].type).toBe('p')
        expect(snapshot.children[2].children[0]).toBe('Hamilton')
        expect(snapshot.children[4].type).toBe('p')
        expect(snapshot.children[4].children[0]).toBe('100')
        expect(snapshot.children[1].type).toBe('p')
        expect(snapshot.children[1].children[0]).toBe('Lewis')
        expect(snapshot.children[3].type).toBe('p')
        expect(snapshot.children[3].children[0]).toBe('Mercedes')
    })
})
