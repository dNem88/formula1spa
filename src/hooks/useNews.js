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
            const [herokuNews, newsapiNews] = await Promise.allSettled([
                 hNews.getHerokuNews(),
                 newsapi.getNews('formula one')
            ])
            
            return [{heroku: herokuNews.value.articles}, {newsapi: newsapiNews.value.articles.map(x => {
                x._id = uuid()
                return x;
            }) }]
        }
        fetchNews().then(result => {
            setContext({articles: result[1].newsapi, backup: result[0].heroku})
        });
    }, [])
    if (context.articles.length > 15) {
        hNews.updateHerokuNews({articles: context.articles})
        console.log(context.articles.length)
    } else if (context.articles.length < 15 && context.backup.length > 15) {
        console.log('We should Not be here')
        setContext({...context, articles: context.backup})
    }
    console.log('render from useNews')
    console.log(context, '=> from context')
    return context;
}

export default useNews