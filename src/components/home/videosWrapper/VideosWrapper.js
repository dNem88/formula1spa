import React, {useState, useEffect, Fragment} from 'react'
import styles from './videosWrapper.module.css'
import Video from '../../common/video/Video'
import hVideos from '../../../utils/api/heroku_api/hVideos'
import ErrorComp from '../../common/errorComp/ErrorComp'
import Spinner from '../../common/spinner/Spinner'
import VideoWrapper from '../../common/videoWrapper/VideoWrapper'

function VideosWrapper() {
    const [videos, setVideos] = useState({error: null, hasError: false, videos: null})
    useEffect(() => {
        async function FetchVideos() {
            try {
                let videosToFetch = 3;
                const response = await hVideos.getVideos(videosToFetch)
                if (!response.ok) {
                    throw new Error('Failed to fetch videos!')
                }
                let json = await response.json()
                if (json.length < videosToFetch) {
                    throw new Error('Invlid video count!')
                }
               
                setVideos({videos: json, hasError: false, error: null})
                return json
            } catch(err) {
                setVideos({...videos, hasError: true, error: err.message})
            }
        }
        FetchVideos()
    },[])
    
    return (
         <fieldset className={styles['editor-pick']}>
                <legend className={styles['editor-legend']}>EDITOR'S PICK</legend>
                {videos.hasError && videos.error ? <ErrorComp errorMessage={videos.error}/> : null}
                {(!videos.error && !videos.hasError) ? videos.videos ? <Fragment>
                    <div className={styles['video-half']}>
                        <Video url={videos.videos[0].url} id={videos.videos[0]._id}/>
                    </div>
                    <div className={styles['video-quarter']}>
                        <VideoWrapper url={videos.videos[1].url} title={videos.videos[1].title} id={videos.videos[1]._id}/>
                    </div>
                    <div className={styles['video-quarter']}>
                        <VideoWrapper url={videos.videos[2].url} title={videos.videos[2].title} id={videos.videos[2]._id}/>
                    </div> 
                </Fragment> : <Spinner/> : null}
            </fieldset>
    )
}

export default VideosWrapper