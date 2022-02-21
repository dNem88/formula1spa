import React, {Fragment} from 'react'
import Spinner from '../../common/spinner/Spinner'
import styles from './videosList.module.css'
import Video from '../../common/video/Video'
import VideoInfo from '../../common/videoInfo/VideoInfo'

function VideosList(props) {

    return (
        <Fragment>
             {props.videos? props.videos.map(x => {
                 return <div key={x._id} className={styles['video-wrapper']}>
                            <Video url={x.url}/>
                            <VideoInfo  _id={x._id} title={x.title}/>
                        </div>
            }) : <Spinner/>}
        </Fragment>
       
    )

}

export default VideosList