import React, {useContext} from 'react'
import styles from './newsLayout.module.css'
import newsContext from '../../../context/newsContext'
import {Outlet} from 'react-router-dom'
import News from '../../common/news/News'


function NewsLayout() {
    const news = useContext(newsContext)
    console.log(news, 'NEWSLAYOUT')
    
    return (
        <section className={styles.wrapper}>
            <Outlet/>
            <div className={styles['news-container']}>
                <section onClick={() => {
                    window.scrollTo(0,0)
                }} className={styles['news-slider']}>
                    {news.articles ? news.articles.map(x => {
                        return <News key={x._id} id={x._id} imageUrl={x.urlToImage} title={x.title} hoverChange={true}/>
                    }) : null}
                </section>
            </div>
            
        </section>
    )
}

export default NewsLayout