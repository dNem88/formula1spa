import React from 'react'
import renderer from 'react-test-renderer'
import EventSchedule from './EventSchedule'
import {render, screen} from '@testing-library/react'

const mockProps = {
    round: '5',
    month: 'JAN',
    imageBase: 'italy',
    country: 'Italy',
    raceName: 'Test Grand Prix'
}


describe('Test ScheduleLayout',() => {
    it('Match Snapshot', () => {
        const snapshot = renderer.create(
            <EventSchedule {...mockProps}/>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.props.className).toBe('main-container')
        expect(snapshot.children.length).toBe(4)
    })
    it('Elements text content', () => {
        render(<EventSchedule {...mockProps}/>)
        expect(screen.getByText('ROUND 5')).toBeTruthy()
        expect(screen.getByText('JAN')).toBeTruthy()
        expect(screen.getByText('Italy')).toBeTruthy()
        expect(screen.getByText('TEST GRAND PRIX', {exact: false})).toBeTruthy()
        expect(screen.getByAltText('race-track-image', {})).toBeTruthy()
    })
})