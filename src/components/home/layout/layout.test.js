import React from 'react'
import renderer from 'react-test-renderer'
import newsContext from '../../../context/newsContext'
import {MemoryRouter} from 'react-router-dom'
import Layout from './Layout'
let contextMock = {articles: [
    {_id: 1, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 2, title: 'daniel2', urltoImage: 'test-url'},
    {_id: 3, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 4, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 5, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 6, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 7, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 8, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 9, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 10, title: 'Dani nemski', urltoImage: 'test-url'},
    {_id: 11, title: 'Dani nemski', urltoImage: 'test-url'},
    {
        _id: 1,
        title: 'Dani nemski',
        urltoImage: 'test-url'
    }
]}
describe('Testing Layout Component', () => {
    it('Should render properly', () => {
        let layout = renderer.create(
            <MemoryRouter>
                <newsContext.Provider value={contextMock}>
                    <Layout/>
                </newsContext.Provider>
            </MemoryRouter>
        ).toJSON();
        expect(layout).toMatchSnapshot();
        expect(layout[0].type).toBe('section')
        expect(layout[0].props.className).toBe('trending')
        expect(layout[0].children.length).toBe(1)
        expect(layout[1].type).toBe('section')
        expect(layout[1].props.className).toBe('news')
        expect(layout[1].children.length).toBe(4)
        expect(layout[2].type).toBe('fieldset')
        expect(layout[2].props.className).toBe('fieldset-full')
        expect(layout[3].type).toBe('h2')
        expect(layout[3].props.className).toBe('h-news')
        expect(layout[4].type).toBe('section')
        expect(layout[4].props.className).toBe('more-news')
        expect(layout[4].children.length).toBe(4)
        expect(layout[5].type).toBe('div')
        expect(layout[6].type).toBe('section')
        expect(layout[6].props.className).toBe('standings')
    })
})