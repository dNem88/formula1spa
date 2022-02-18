import React from 'react'
import renderer from 'react-test-renderer'
import DriverStandings from './DriversStandings'
import { MemoryRouter } from 'react-router-dom'


describe('Testing DriverStandings',() => {
    it('Render Component', () => {
        let snapshot = renderer.create(
            <MemoryRouter>
                <DriverStandings />
            </MemoryRouter>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('div')
        expect(snapshot.props.className).toBe('main-container')
        expect(snapshot.children.length).toBe(3)
        let button = snapshot.children[2]
        expect(button.type).toBe('a')
        expect(button.props.href).toBe('/standings')
        expect(button.children[0]).toBe('VIEW FULL STANDINGS')
    })
})