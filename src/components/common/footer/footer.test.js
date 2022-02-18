import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'
import {
    MemoryRouter
} from 'react-router-dom'
import { render } from 'react-dom'

describe('Testing Footer', () => {
    it('Render Links Properly', () => {
        let snapshot = renderer.create(
            <MemoryRouter>
                <Footer/>
            </MemoryRouter>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('footer')
        expect(snapshot.props.className).toBe('footer')
        expect(snapshot.children.length).toBe(2)
        let linksContainer = snapshot.children[0]
        expect(linksContainer.children.length).toBe(7)
        expect(linksContainer.children[0].type).toBe('a')
        expect(linksContainer.children[0].children[0]).toBe('Home')
        expect(linksContainer.children[0].props.href).toBe('/')
        expect(linksContainer.children[1].type).toBe('a')
        expect(linksContainer.children[1].children[0]).toBe('News')
        expect(linksContainer.children[1].props.href).toBe('/news')
        expect(linksContainer.children[2].type).toBe('a')
        expect(linksContainer.children[2].children[0]).toBe('Videos')
        expect(linksContainer.children[2].props.href).toBe('/videos')
        expect(linksContainer.children[3].type).toBe('a')
        expect(linksContainer.children[3].children[0]).toBe('Schedule')
        expect(linksContainer.children[3].props.href).toBe('/schedule')
        expect(linksContainer.children[4].type).toBe('a')
        expect(linksContainer.children[4].children[0]).toBe('Standings')
        expect(linksContainer.children[4].props.href).toBe('/standings')
        expect(linksContainer.children[5].type).toBe('a')
        expect(linksContainer.children[5].children[0]).toBe('Drivers')
        expect(linksContainer.children[5].props.href).toBe('/drivers')
        expect(linksContainer.children[6].type).toBe('a')
        expect(linksContainer.children[6].children[0]).toBe('Teams')
        expect(linksContainer.children[6].props.href).toBe('/teams')
        let strongContainer = snapshot.children[1]
        expect(strongContainer.type).toBe('div')
        expect(strongContainer.children.length).toBe(1)
        expect(strongContainer.children[0].type).toBe('strong')
        expect(strongContainer.children[0].children[0]).toBe('@Formula 1 React Project 2022')
    })
})