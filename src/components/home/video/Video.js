import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from './video.module.css'
function Video(props) {
    let youtubeUrl = 'https://www.youtube.com/watch?v=aPytuKo87W8';
    return (
        <div className={styles['player-wrapper']}>
            <ReactPlayer className={styles.player} width={'100%'} height={'100%'} url={youtubeUrl} controls={true} muted={true}/>
        </div>
    )
}

export default Video