import React from 'react'
import styles from './videoInfo.module.css'
function VideoInfo(props) {
    return (
        <div className={styles['light-info']}>
            <p className={styles['video-par']}>VIDEO</p>
            <p className={styles['content-video-par']}>{props.title}</p>
        </div>  
    )
}

export default VideoInfo;