import React from 'react'
import styles from './latestVideosContainer.module.css'
import VideosList from '../VideosList/VideosList'

function LatestVideosContainer(props) {
    return (
        <section className={styles['main-container']}>
            <VideosList {...props}/>
        </section>
    )
}

export default LatestVideosContainer