import React from 'react'
import renderer from 'react-test-renderer'
import {MemoryRouter} from 'react-router-dom'
import ActiveSchedule from './ActiveSchedule'

let mockProps = {
    raceName: 'test-race',
    season: '2022',
    classname: 'test-class',
    imageBase: 'test-base',
    country: 'test-country',
    raceTitle: 'test-title',
    weekend: 'test-weekend',

}
describe('Test ActiveSchedule' , () => {
    it('Should render properly', () => {
        let activeSchedule = renderer.create(
            <MemoryRouter>
                <ActiveSchedule {...mockProps}/>
            </MemoryRouter>
        ).toJSON()
        expect(activeSchedule.type).toBe('div')
        expect(activeSchedule.props.className).toBe('wrapper')
        expect(activeSchedule.children.length).toBe(3)
        expect(activeSchedule.children[0].type).toBe('div')
        expect(activeSchedule.children[0].props.className).toBe('content-container')
        expect(activeSchedule.children[1].type).toBe('div')
        expect(activeSchedule.children[1].props.className).toBe('clock-banner-container')
        expect(activeSchedule.children[2].type).toBe('table')
        expect(activeSchedule.children[2].props.className).toBe('race-time-container')
        let contentContainer = activeSchedule.children[0]
        expect(contentContainer.children.length).toBe(4)
        expect(contentContainer.children[0].type).toBe('div')
        expect(contentContainer.children[0].props.className).toBe('test-class')
        expect(contentContainer.children[1].type).toBe('h5')
        expect(contentContainer.children[1].props.className).toBe('country')
        expect(contentContainer.children[1].children[0]).toBe('test-country')
        expect(contentContainer.children[2].type).toBe('h2')
        expect(contentContainer.children[2].props.className).toBe('gp-name')
        expect(contentContainer.children[2].children[0]).toBe(`formula 1 ${mockProps.raceName} ${mockProps.season}`.toUpperCase())
        expect(contentContainer.children[3].type).toBe('h6')
        expect(contentContainer.children[3].props.className).toBe('weekend-duration')
        expect(contentContainer.children[3].children[0]).toBe('test-weekend')
        let clockContainer = activeSchedule.children[1]
        let tableContainer = activeSchedule.children[2]
    })
})