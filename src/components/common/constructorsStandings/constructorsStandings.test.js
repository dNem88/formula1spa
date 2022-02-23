import React from 'react'
import renderer from 'react-test-renderer'
import ConstructorsStandings from './ConstructorsStandings'
import {MemoryRouter} from 'react-router-dom'



jest.mock('../constructorsPoints/ConstructorsPoints', () => () => 'Constructor Poitns Mock')

describe('Testing Constructor Standings Component', () => {
    it('render properly ', () => {
        const snapshot = renderer.create(
            <MemoryRouter>
                <ConstructorsStandings/>
            </MemoryRouter>
        ).toJSON()
        expect(snapshot).toMatchSnapshot()
        expect(snapshot.type).toBe('div')
    })

    
})