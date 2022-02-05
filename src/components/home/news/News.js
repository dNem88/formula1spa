import React, {useRef} from 'react';
import styles from './news.module.css'

function News(props) {
    console.log(props.hoverChange)
    return (
        <div className={styles['main-container']}>
            <div className={styles['image-container']}>
                <img id={styles['news-image']} alt={'some image'} src={props.imageUrl}/>
            </div>
            <div className={props.hoverChange === true ? styles['dark-container'] : styles.container}>
                <p className={styles['news-par']}>NEWS</p>
                <p className={styles['content-par']}>{props.content}</p>
            </div>   
        </div>
    )
}

export default News