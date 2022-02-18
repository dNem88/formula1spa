import React from 'react'
import renderer from 'react-test-renderer'
import RaceTime from './RaceTime'
import { MemoryRouter } from 'react-router-dom'
const mockProps = {
    raceStartUTC: new Date(2022,2,20,4,50).toUTCString()
}

describe('Testing RaceTime',() => {
    it('Render Correct Time', () => {
        let snapshot = renderer.create(
            <MemoryRouter>
                <RaceTime {...mockProps}/>
            </MemoryRouter>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('table')
        expect(snapshot.props.className).toBe('race-time-container')
        expect(snapshot.children[0].type).toBe('tbody')
        expect(snapshot.children[0].children.length).toBe(3)
    })
})