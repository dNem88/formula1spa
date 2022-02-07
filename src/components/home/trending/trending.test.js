import React from 'react'
import renderer from 'react-test-renderer'
import Trending from './Trending'
import {MemoryRouter} from 'react-router-dom'

describe('Trending component', () => {
    
    it('Testing trendin', () => {
        let trending = renderer.create(
        <MemoryRouter>
            <Trending article={{title: 'test-title', _id: 'test-id', urlToImage: 'test-url'}}/>
        </MemoryRouter>
    ).toJSON() 
        expect(trending).toMatchSnapshot()
        expect(trending.props.id).toBe('test-id')
        expect(trending.props.className).toBe('wrapper')
        expect(trending.type).toBe('div')
        expect(trending.children[0].props.className).toBe('trending-p')
        expect(trending.children[0].type).toBe('p')
        expect(trending.children[0].children[0]).toBe('TRENDING')
        expect(trending.children[1].props.className).toBe('trending-heading')
        expect(trending.children[1].type).toBe('h1')
        expect(trending.children[1].children[0]).toBe('test-title')
        expect(trending.children[2].props.className).toBe('image-container')
        expect(trending.children[2].type).toBe('div')
        expect(trending.children[2].children[0].props.className).toBe('trending-image')
        expect(trending.children[2].children[0].type).toBe('img')
        expect(trending.children[2].children[0].props.src).toBe('test-url')
        
    })
})