import React, {Fragment, useContext, useState, useEffect} from 'react'
import styles from './layout.module.css'
import News from '../../common/news/News'
import Trending from '../trending/Trending'
import newsContext from '../../../context/newsContext'
import VideoWrapper from '../../common/videoWrapper/VideoWrapper'
import Video from '../../common/video/Video'
import hVideos from '../../../utils/api/heroku_api/hVideos'
import Schedule from '../../home/schedule/Schedule'
function Layout() {
    let context = useContext(newsContext);
    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function FetchVideos() {
            const response = await hVideos.getVideos(3)
            setVideos(response)
        }
        FetchVideos()
    }, [])

    return (
        <Fragment>
            <section className={styles['trending']}>
                {(context.articles.length > 0) ? <Trending article={context.articles[0]}/> : <p>...Loading</p>}
            </section>
            <section className={styles['news']}>
                {(context.articles.length > 3) ? context.articles.slice(1,5).map(x => {
                        return <News key={x._id} id={x._id} imageUrl={x.urlToImage} title={x.title}/>
                    }) : <p>...Loading</p>}
            </section>
            <fieldset className={styles['editor-pick']}>
                <legend className={styles['editor-legend']}>EDITOR'S PICK</legend>
                {videos.length < 3 ? <p>...Loading</p> : 
                <Fragment>
                    <div className={styles['video-half']}>
                        <Video url={videos[0].url} id={videos[0]._id}/>
                    </div>
                    <div className={styles['video-quarter']}>
                        <VideoWrapper url={videos[1].url} title={videos[1].title} id={videos[1]._id}/>
                    </div>
                    <div className={styles['video-quarter']}>
                        <VideoWrapper url={videos[2].url} title={videos[2].title} id={videos[2]._id}/>
                    </div> 
                </Fragment>}
            </fieldset>
            <h2 className={styles['h-news']}>More news</h2>
            <section className={styles['more-news']}>
                  {(context.articles.length >= 10) ? context.articles.slice(5,9).map(x => {
                        return <News key={x._id} id={x._id} imageUrl={x.urlToImage} title={x.title} hoverChange={true}/>
                    }) : <p>...Loading</p>}
            </section>
            <section className={styles['schedule']}>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
            </section>
            <section className={styles['standings']}>

            </section>
        </Fragment>
    )
}


export default Layout