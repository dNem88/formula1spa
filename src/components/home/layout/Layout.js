import React, {Fragment, useContext} from 'react'
import styles from './layout.module.css'
import News from '../news/News'
import Trending from '../trending/Trending'
import newsContext from '../../../context/newsContext'

function Layout(props) {
    let context = useContext(newsContext);
    
    return (
        <Fragment>
            <section className={styles['trending']}>
                {(context.articles.length > 0) ? <Trending article={context.articles[1]}/> : <p>...Loading</p>}
            </section>
            <section className={styles['news']}>
                {(context.articles.length > 3) ? context.articles.slice(1,5).map(x => {
                        return <News key={x._id} id={x._id} imageUrl={x.urlToImage} title={x.title}/>
                    }) : <p>...Loading</p>}
            </section>
            <fieldset className={styles['editor-pick']}>
                <legend className={styles['editor-legend']}>EDITOR'S PICK</legend>
            </fieldset>
            <h2 className={styles['h-news']}>More news</h2>
            <section className={styles['more-news']}>
                  {(context.articles.length > 3) ? context.articles.slice(5,9).map(x => {
                        return <News key={x._id} id={x._id} imageUrl={x.urlToImage} title={x.title} hoverChange={true}/>
                    }) : <p>...Loading</p>}
            </section>
            <section className={styles['schedule']}>

            </section>
            <section className={styles['standings']}>

            </section>
        </Fragment>
    )
}


export default Layout