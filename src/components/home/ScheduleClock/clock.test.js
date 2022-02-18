import React from 'react'
import renderer from 'react-test-renderer'
import Clock from './Clock'
import {
    MemoryRouter
} from 'react-router-dom'

jest.mock('../../../assets/images/clock.png', () => 'clock-image')

describe('Testing Clock Component', () => {
    it('Render Clock', () => {
        let snapshot = renderer.create(
            <MemoryRouter>
                <Clock/>
            </MemoryRouter>
        ).toJSON()
        expect(snapshot.type).toBe('div')
        expect(snapshot.props.className).toBe('clock-banner-container')
        expect(snapshot.children.length).toBe(2)
        let image = snapshot.children[0].children[0]
        expect(image.props.src).toBe('clock-image')
        expect(image.props.alt).toBe('clock')
        expect(snapshot.children[1].children.length).toBe(2)
        expect(snapshot.children[1].children[0].children[0]).toBe('Your Time')
        expect(snapshot.children[1].children[1].children[0]).toMatch(/\d{2} : \d{2}/g)
        expect(snapshot.children[1].children[1].props.className).toBe('thicking')
    })
    
})