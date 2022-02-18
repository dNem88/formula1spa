import React from 'react';
import styles from './news.module.css'
import {useNavigate} from 'react-router-dom'

function News(props) {
    let navigate = useNavigate();
    function clickHandler(e) {
        navigate(`/news/${props.id}`)
    }
    return (
        <div onClick={clickHandler} id={props.id} className={styles['main-container']}>
            <div className={styles['image-container']}>
                <img id={styles['news-image']} alt={'image-from-newsapi'} src={props.imageUrl} loading='lazy'/>
            </div>
            <div  className={props.hoverChange === true ? styles['dark-container'] : styles.container}>
                <p className={styles['news-par']}>NEWS</p>
                <p className={styles['content-par']}>{props.title}</p>
            </div>   
        </div>
    )
}

export default News