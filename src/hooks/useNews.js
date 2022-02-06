import React, { useState, useEffect, useContext } from 'react';
import newsContext from '../context/newsContext';
import getNews from '../utils/api/newsapi/newsapi';
import {v4 as uuid} from 'uuid'

function useNews() {
    const context = useContext(newsContext)
    const [news, setNews] = useState(context)
    useEffect(() => {
         getNews('formula one')
             .then(result => {
                 setNews({articles: result.articles.map(x => {
                     x._id = uuid();
                     return x;
                 })})
             })
             .catch(e => {
                 return {error: 'News api response is not good'}
             })
    }, [])
    console.log('render from useNews')
    context.articles = news.articles
    return context;
}

export default useNews