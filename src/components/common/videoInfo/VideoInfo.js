import React from 'react'
import styles from './videoInfo.module.css'
import {useNavigate, useLocation} from 'react-router-dom'

function VideoInfo(props) {
    let navigate = useNavigate()
    let location = useLocation()
    function clickHandler() {
        navigate(`/videos/${props.id || props._id}`)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
        
    
    return (
        <div onClick={clickHandler} className={styles['light-info']}>
            <p className={styles['video-par']}>VIDEO</p>
            <p className={styles['content-video-par']}>{props.title}</p>
        </div>  
    )
}

export default VideoInfo;