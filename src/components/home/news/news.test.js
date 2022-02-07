import React from 'react'
import News from './news'
import renderer from 'react-test-renderer'
import {MemoryRouter} from 'react-router-dom'
describe('Testing news Component', () => {
    it('Testing News element', () => {
        let news = renderer.create(
            <MemoryRouter>
                <News hoverChange={false} id={'test-id'} imageUrl={'test-url'} title={'test-title'}/>
            </MemoryRouter>
        ).toJSON();
        expect(news).toMatchSnapshot()
        expect(news.type).toBe('div')
        expect(news.props.className).toBe('main-container')
        expect(news.props.id).toBe('test-id')
        expect(news.children[0].type).toBe('div')
        expect(news.children[0].props.className).toBe('image-container')
        expect(news.children[1].type).toBe('div')
        expect(news.children[1].props.className).toBe('container')
        expect(news.children[0].children[0].type).toBe('img')
        expect(news.children[0].children[0].props.id).toBe('news-image')
        expect(news.children[0].children[0].props.src).toBe('test-url')
        expect(news.children[1].children[0].type).toBe('p')
        expect(news.children[1].children[0].props.className).toBe('news-par')
        expect(news.children[1].children[0].children[0]).toBe('NEWS')
        expect(news.children[1].children[1].type).toBe('p')
        expect(news.children[1].children[1].props.className).toBe('content-par')
        expect(news.children[1].children[1].children[0]).toBe('test-title')
    })
    it('Testing News elements with changed className', () => {
        let newsTwo = renderer.create(
            <MemoryRouter>
                <News hoverChange={true} id={'test-id'} imageUrl={'test-url'} title={'test-title'}/>
            </MemoryRouter>
        ).toJSON();
        expect(newsTwo).toMatchSnapshot()
        expect(newsTwo).toMatchSnapshot()
        expect(newsTwo.type).toBe('div')
        expect(newsTwo.props.className).toBe('main-container')
        expect(newsTwo.props.id).toBe('test-id')
        expect(newsTwo.children[0].type).toBe('div')
        expect(newsTwo.children[0].props.className).toBe('image-container')
        expect(newsTwo.children[1].type).toBe('div')
        expect(newsTwo.children[1].props.className).toBe('dark-container')
        expect(newsTwo.children[0].children[0].type).toBe('img')
        expect(newsTwo.children[0].children[0].props.id).toBe('news-image')
        expect(newsTwo.children[0].children[0].props.src).toBe('test-url')
        expect(newsTwo.children[1].children[0].type).toBe('p')
        expect(newsTwo.children[1].children[0].props.className).toBe('news-par')
        expect(newsTwo.children[1].children[0].children[0]).toBe('NEWS')
        expect(newsTwo.children[1].children[1].type).toBe('p')
        expect(newsTwo.children[1].children[1].props.className).toBe('content-par')
        expect(newsTwo.children[1].children[1].children[0]).toBe('test-title')
    })
})