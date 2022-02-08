import React from 'react'
import styles from './videoInfo.module.css'
import {useNavigate} from 'react-router-dom'

function VideoInfo(props) {
    let navigate = useNavigate()
    function clickHandler() {
        navigate(`/videos/${props.id}`)
    }
    return (
        <div onClick={clickHandler} className={styles['light-info']}>
            <p className={styles['video-par']}>VIDEO</p>
            <p className={styles['content-video-par']}>{props.title}</p>
        </div>  
    )
}

export default VideoInfo;