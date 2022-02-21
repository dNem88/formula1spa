import React, {Fragment, useContext, useState, useEffect} from 'react'
import ErrorComp from '../../common/errorComp/ErrorComp'
import newsContext from '../../../context/newsContext'
import {useLocation, useParams} from 'react-router-dom'
import styles from './activeNews.module.css'
import NewsDummyContent from '../../common/content/NewsDummyContent'

function ActiveNews(props) {
    const news = useContext(newsContext)
    const location = useLocation()
    let {id} = useParams()
    const [state, setState] = useState({id: null, article: news.articles, error: null, errorMessage: null})
    useEffect(() => {
        
        if (props.index && news.articles) {
                setState({error: null, errorMessage: null, id: news.articles[0]._id, article: news.articles[0]})
                }
        if(!props.index) {
            try {
                if (news.articles) {
                    let filtered = news.articles.filter(x => x._id === id) 
                    setState({error: null, errorMessage: null, id: id, article: filtered[0] || news.articles[0]})
                }
            } catch(err) {
                setState({...state, error: true, errorMessage: err.message})
            }
        }
        
    },[location.pathname, news.articles])

    return (
        <Fragment>
            {state.error && state.errorMessage ? <ErrorComp errorMessage={state.errorMessage}/> : 
            <section className={styles.section}>
            {state.article ?
                <Fragment>
                    <p className={styles['feature']}>NEWS</p>
                    <h1 className={styles['news-heading']}>{state.article.title}</h1>
                    <div className={styles['image-container']}>
                    <img alt='news-newsapi-image' src={state.article.urlToImage}/>
                    </div>
                    <NewsDummyContent/>
                </Fragment> : null}
            </section>
            }
        </Fragment>
        
    )
}


export default ActiveNews