import React from 'react'
import renderer from 'react-test-renderer'
import ScheduleLayout from './ScheduleLayout'
import {render, screen} from '@testing-library/react'


describe('Test ScheduleLayout',() => {
    it('Match Snapshot', () => {
        const snapshot = renderer.create(
            <ScheduleLayout />
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.props.className).toBe('main-container')
    })
    it('Elements text content', () => {
        render(<ScheduleLayout />)
        expect(screen.getByText('F1 Schedule 2022')).toBeTruthy()
        expect(screen.getByText('A record 23-race Formula 1 calendar for 2022, ', {exact: false})).toBeTruthy()
    })
})