import React, { useState, useEffect, useContext } from 'react';
import newsContext from '../context/newsContext';
import newsapi from '../utils/api/newsapi/newsapi';
import {v4 as uuid} from 'uuid'
import hNews from '../utils/api/heroku_api/hNews'

function useNews() {
    let ctx = useContext(newsContext)
    const [context, setContext] = useState(ctx)

    useEffect(() => {
        async function fetchNews() {
            try{
                const newsapiNews = await newsapi.getNews('formula one cars')
                    .then(result => {
                        hNews.updateHerokuNews({articles: result.articles})
                        return result.articles.map(x => {
                         
                            x._id = uuid()
                            return x;
                        })
                    })
                    return {newsapi: newsapiNews}
            } catch(e) {
                return {newsapi: ['error']}
            }
        }
        async function fetchNewsFromHeroku() {
            try{
                const herokuNews = await hNews.getHerokuNews()
                return herokuNews.articles;
            }catch(e) {
                return {heroku: ['error']}
            }
        }
        ((process.env.NODE_ENV === 'development') ? fetchNews()
            .then(result => {
            setContext({articles: result.newsapi})
        }).catch(e => {
            setContext({articles: []})
        }) : fetchNewsFromHeroku().then(result => {
            let articlesWithId = result.map(x => {
                x._id = uuid()
                return x;
            })
            setContext({articles: articlesWithId})
        }).catch(e => {
            setContext({articles: []})
        }))
        
    }, [])
    
    
    return context;
}

export default useNews