import React, {Fragment} from 'react'
import styles from './mainVideo.module.css'
import Video from '../../common/video/Video'
import VideoInfo from '../../common/videoInfo/VideoInfo'
import {useOutletContext} from 'react-router-dom'
import Fieldset from '../../common/containers/fieldset/Fieldset'

function MainVideo() {
    const context = useOutletContext()
    let video = null;
    if ( context.mainVideo) {
        video = context.mainVideo
        console.log(video)
    }
   
    return (
        <Fieldset content={'MUST SEE'} size={'half'} color={'white'}>
            {video ?
             <Fragment>
                <div className={styles['video-wrapper']}>
                    <Video url={video.url}/>
                    <VideoInfo _id={video._id} title={video.title}/>
                </div>
             </Fragment> : null
            } 
        </Fieldset>
    )
}

export default MainVideo;