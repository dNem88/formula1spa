import React, {useState,useEffect} from 'react'
import styles from './videoLayout.module.css'
import hVideos from '../../../utils/api/heroku_api/hVideos'
import ErrorComp from '../../common/errorComp/ErrorComp'
import VideosContainer from '../videosContainer/VideosContainer'
import LatestVideosContainer from '../latestVideosContainer/LatestVideosContainer'
import {useLocation, useParams} from 'react-router-dom'

function VideoLayout() {
    const [state, setState] = useState({error: null, errorMessage: null, videos: null, mainID: null, mainVideo: null})
    const location = useLocation()
    let {id} = useParams()
  
    useEffect(() => {
        async function FetchVideos() {
            try {
                const response = await hVideos.getVideos();
                if (!response.ok) {
                    throw new Error('Failed to fetch')
                }
                let json = await response.json()
                setState({error: null, errorMessage: null, videos: json, mainID: null})
            } catch(err) {
                setState({error: true, errorMessage: err.message, videos: null, ...state})
            }
           
        }
         FetchVideos()
    }, [])

    useEffect(() => {
        if (id && state.videos) {
            let videoToRender = state.videos.filter(x => x._id === id)
            if (videoToRender) {
                setState({...state, mainID: id, mainVideo: videoToRender[0]})
            } 
        }
        if (!id) {
            if (state.videos) {
                id = state.videos[0]._id
                 setState({
                     ...state,
                     mainID: id,
                     mainVideo: state.videos[0]
                 })
            }
        }
    }, [state.videos, location.pathname])
    
    return (
        <div className={styles.layout}>
            {state.error && state.errorMessage ? <ErrorComp errorMessage={state.errorMessage}/> : null}
            <h1 className={styles['header']}>Video</h1>
            <VideosContainer {...state}/>
            <h1 className={styles['latest-header']}>Latest videos</h1>
            <LatestVideosContainer {...state}/>
        </div>
        
    )
}

export default VideoLayout