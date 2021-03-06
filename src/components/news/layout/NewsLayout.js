import React, {useContext} from 'react'
import styles from './newsLayout.module.css'
import newsContext from '../../../context/newsContext'
import {Outlet} from 'react-router-dom'
import News from '../../common/news/News'


function NewsLayout() {
    const news = useContext(newsContext)
    
    function scrollToTopSmoothly() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <section className={styles.wrapper}>
            <Outlet/>
            <div className={styles['news-container']}>
                <section onClick={scrollToTopSmoothly} className={styles['news-slider']}>
                    {news.articles ? news.articles.map(x => {
                        return <News key={x._id} id={x._id} imageUrl={x.urlToImage} title={x.title} hoverChange={true}/>
                    }) : null}
                </section>
            </div>
            
        </section>
    )
}

export default NewsLayout