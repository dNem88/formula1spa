import React from 'react'
import styles from './verticalSlider.module.css'
import VideoInfo from '../../common/videoInfo/VideoInfo'
import Video from '../../common/video/Video'

function VerticalSlider({videos}) {


    return (
        <div className={styles['slider']}>
            <h3 className={styles['more-videos-title']}>More videos</h3>
            <div className={styles['relative-wrapper']}>
                <div className={styles['slider-container-absolute']}>
                    {videos.slice(0,4).map(x => {
                        return <div key={x._id} className={styles['video-wrapper']}>
                                    <Video url={x.url}/>
                                    <VideoInfo  _id={x._id} title={x.title}/>
                                </div>
                                    })}
                </div>
            </div> 
        </div>
    )
}

export default VerticalSlider