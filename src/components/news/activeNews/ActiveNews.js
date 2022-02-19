import React, {Fragment, useContext, useState, useEffect} from 'react'
import ErrorComp from '../../common/errorComp/ErrorComp'
import Spinner from '../../common/spinner/Spinner'
import newsContext from '../../../context/newsContext'
import {useLocation} from 'react-router-dom'
import styles from './activeNews.module.css'


function ActiveNews(props) {
    const news = useContext(newsContext)
    const location = useLocation()
    const [activeId, setActiveId] = useState({id: null, article: news.articles, error: null, errorMessage: null})
    useEffect(() => {
        
        if (props.index && news.articles) {
                setActiveId({error: null, errorMessage: null, id: news.articles[0]._id, article: news.articles[0]})
                }
        if(!props.index) {
            try {
                let newsId = location.pathname.match(/\/[a-z0-9-]{15,}/g)[0].substring(1)
                if (news.articles) {
                    let filtered = news.articles.filter(x => x._id === newsId) 
                    setActiveId({error: null, errorMessage: null, id: newsId, article: filtered[0] || news.articles[0]})
                }
            } catch(err) {
                setActiveId({...activeId, error: true, errorMessage: err.message})
            }
        }
        
    },[location.pathname, news.articles])

    return (
        <Fragment>
            {activeId.error && activeId.errorMessage ? <ErrorComp errorMessage={activeId.errorMessage}/> : 
            <section className={styles.section}>
            {activeId.article ?
                <Fragment>
                    <p className={styles['feature']}>NEWS</p>
                    <h1 className={styles['news-heading']}>{activeId.article.title}</h1>
                    <div className={styles['image-container']}>
                    <img alt='news-newsapi-image' src={activeId.article.urlToImage}/>
                    </div>
                    <p className={styles['content']}>{activeId.article.content}</p>
                </Fragment> : null}
            </section>
            }
        </Fragment>
        
    )
}


export default ActiveNews