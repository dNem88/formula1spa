import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from './video.module.css'
function Video({url}) {
   
    return (
        <div className={styles['player-wrapper']}>
            <ReactPlayer className={styles.player} width={'100%'} height={'100%'} url={url} light={true} controls={true} />
        </div>
    )
}

export default Video