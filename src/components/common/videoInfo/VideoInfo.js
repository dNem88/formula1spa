import React from 'react'
import styles from './videoInfo.module.css'
import {useNavigate, useLocation} from 'react-router-dom'

function VideoInfo({_id, id, title}) {
    let navigate = useNavigate()
    let location = useLocation()
    function clickHandler() {
        navigate(`/videos/${id || _id}`)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
        
    
    return (
        <div onClick={clickHandler} className={styles['light-info']}>
            <p className={styles['video-par']}>VIDEO</p>
            <p className={styles['content-video-par']}>{title}</p>
        </div>  
    )
}

export default VideoInfo;