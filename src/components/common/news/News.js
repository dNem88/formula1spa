import React from 'react';
import styles from './news.module.css'
import NewsContainer from '../containers/News/NewsContainer';

function News({id, imageUrl, hoverChange, title}) {
  

    return (
        <NewsContainer id={id} path={'news'} type={'vertical'}>
            <div className={styles['image-container']}>
                <img id={styles['news-image']} alt={'image-from-newsapi'} src={imageUrl} loading='lazy'/>
            </div>
            <div className={hoverChange === true ? styles['dark-container'] : styles.container}>
                <p className={styles['news-par']}>NEWS</p>
                <p className={styles['content-par']}>{title}</p>
            </div>   
        </NewsContainer>
        
    )
}

export default News