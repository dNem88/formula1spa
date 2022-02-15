import React, {Fragment, useContext} from 'react'
import styles from './layout.module.css'
import News from '../../common/news/News'
import Trending from '../trending/Trending'
import newsContext from '../../../context/newsContext'
import Spinner from '../../common/spinner/Spinner'
import ErrorComp from '../../common/errorComp/ErrorComp'
import VideosWrapper from '../videosWrapper/VideosWrapper'
import ScheduleWrapper from '../ScheduleWrapper/ScheduleWrapper'

function Layout() {
    let context = useContext(newsContext);

    return (
        <Fragment>
            <section className={styles['trending']}>
                {context.error && context.hasError ?  <ErrorComp errorMessage={context.error}/> : null}
                {(!context.error && !context.hasError) ? context.articles ? <Trending article={context.articles[0]}/> : <Spinner/> : null}
            </section>
            <section className={styles['news']}>
                {context.error && context.hasError ?  <ErrorComp errorMessage={context.error}/> : null}
                {(!context.error && !context.hasError) ? context.articles ? context.articles.slice(1,5).map(x => {
                        return <News key={x._id} id={x._id} imageUrl={x.urlToImage} title={x.title}/>
                    }) : <Spinner/> : null}
            </section>
            <VideosWrapper/>
            <h2 className={styles['h-news']}>More news</h2>
            <section className={styles['more-news']}>
                {context.error && context.hasError ?  <ErrorComp errorMessage={context.error}/> : null}
                {(!context.error && !context.hasError) ? context.articles ? context.articles.slice(5,9).map(x => {
                        return <News key={x._id} id={x._id} imageUrl={x.urlToImage} title={x.title} hoverChange={true}/>
                    }) : <Spinner/> : null}
            </section>
            <ScheduleWrapper/>
            <section className={styles['standings']}>

            </section>
        </Fragment>
    )
}


export default Layout