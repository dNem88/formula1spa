import React from 'react';
import VideoInfo from '../videoInfo/VideoInfo';
import Video from '../video/Video';
import styles from './videoWrapper.module.css'


function VideoWrapper(props) {
    return (
        <div className={styles['video-container']}>
            <div className={styles['video-sub']}>
                <Video url={props.url}/>
            </div>
            <div className={styles['video-info']}>
                <VideoInfo title={props.title} id={props.id}/>
            </div>
        </div>
    )
}

export default VideoWrapper