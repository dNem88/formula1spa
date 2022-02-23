import React from 'react'
import renderer from 'react-test-renderer'
import StandingsLayout from './StandingsLayout'


jest.mock('../../register/Select/SelectForm', () => 'SelectForm')
jest.mock('../../common/titleHeader/CommonHeader', () => 'CommonHeader')

describe('Test ScheduleLayout',() => {
    it('Match Snapshot', () => {
        const snapshot = renderer.create(
            <StandingsLayout />
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.props.className).toBe('wrapper')
        expect(snapshot.children.length).toBe(3)
    })
   
})