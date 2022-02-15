import React from 'react'
import renderer from 'react-test-renderer'
import Schedule from './Schedule'
import {MemoryRouter} from 'react-router-dom'
import transformSchedule from '../../../utils/common/transformSchedule'


const mockSameId = {
    _id: 'test-id',
    activeId: 'test-id'
}
const mockDifferentId = {
    _id: 'test-id',
    activeId: 'diff-id'
}
let mockProps = {
    date: '05-05-2022',
    Circuit: {
        Location: {
            country: 'Bulgaria'
        }
    },
    raceName: "Imola",
    season: "2022"
}
jest.fn(transformSchedule(mockProps))
jest.mock('../activeSchedule/ActiveSchedule', () => () => {
    let Mock = 'ActiveScheduleMock'
    return <Mock/>
})

describe('Test Schedule', () => {
    it('Schedule active', () => {
        let schedule = renderer.create(
            <MemoryRouter>
                <Schedule {...mockProps} {...mockSameId}/>
            </MemoryRouter>
        ).toJSON()
        expect(schedule).toMatchSnapshot()
        expect(schedule.props.className).toBe('active-main-container')
        expect(schedule.props.id).toBe('test-id')
        
    })
    it('Schedule non-active', () => {
        let scheduleNon = renderer.create(
            <MemoryRouter>
                <Schedule {...mockDifferentId} {...mockProps}/>
            </MemoryRouter>
        ).toJSON()
        expect(scheduleNon).toMatchSnapshot()
        expect(scheduleNon.props.className).toBe('main-container')
        expect(scheduleNon.props.id).toBe('test-id')
        expect(scheduleNon.children.length).toBe(4)
    })
})