import { useState, useEffect, useContext } from 'react';
import newsContext from '../context/newsContext';
import newsapi from '../utils/api/newsapi/newsapi';
import {v4 as uuid} from 'uuid'
import hNews from '../utils/api/heroku_api/hNews'

function useNews() {
    let ctx = useContext(newsContext)
    const [context, setContext] = useState(ctx)

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await newsapi.getNews('formula one cars')
                if (!response.ok) {
                    throw new Error('Server error! Response ok is false')
                }
                const newsapiNews = await response.json()
                console.log(newsapiNews)
                if (newsapiNews.articles.length > 15) {
                    hNews.updateHerokuNews({
                        articles: newsapiNews.articles
                    }) /*Update database with the current response*/
                }
                return newsapiNews.articles.map(x => {
                    x._id = uuid()
                    return x;
                })     /*Add id to each article, newsapi doesnt provide id in the response*/
            } catch(err) {
                return new Error(err.message, {cause: err})

            }
        }
        async function fetchNewsFromHeroku() {
            try{
                const response = await hNews.getHerokuNews()
                if (!response.ok) {
                    throw new Error('Fetch Failed! Response ok is false')
                }
                const herokuNews = await response.json()
                return herokuNews[0]
            } catch(err) {
                return err
            }
        }

        ((process.env.NODE_ENV === 'development') ? fetchNews()
                .then(json => {
                    if (json.message) {
                        throw new Error(json.message)
                    }
                    setContext({articles: json.reverse(), error: null, hasError: false})
                }).catch(err => {
                    setContext({...context, hasError: true, error: err.message})
        }) : fetchNewsFromHeroku()
                .then(response => {
                    if (response.message) {
                        throw new Error(response.message)
                    }
                    if (!response.articles)  {
                        throw new Error('Not enough articles to show!')
                    }
                    let articlesWithId = response.articles
                        .map(x => {
                            x._id = uuid()
                            return x;
                        })
                        .reverse()
                    setContext({hasError: false, error: null, articles: articlesWithId})
                }).catch(err => {
                    setContext({...context, hasError: true, error: err.message})
                }))
        
    }, [])
    
    return context;
}

export default useNews