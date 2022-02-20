import React, {Fragment} from 'react'
import styles from './mainVideo.module.css'
import Video from '../../common/video/Video'
import VideoInfo from '../../common/videoInfo/VideoInfo'
import {useOutletContext} from 'react-router-dom'

function MainVideo() {
    const context = useOutletContext()
    let video = null;
    if ( context.mainVideo) {
        video = context.mainVideo
        console.log(video)
    }
   
    return (
        <fieldset className={styles['main-container']}>
            {video ?
             <Fragment>
                <legend className={styles.legend}>Must see</legend>
                <div className={styles['video-wrapper']}>
                    <Video url={video.url}/>
                    <VideoInfo _id={video._id} title={video.title}/>
                </div>
             </Fragment> : null
            }
            
        </fieldset>
    )
}

export default MainVideo;