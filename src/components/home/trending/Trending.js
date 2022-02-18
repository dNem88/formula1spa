import React  from 'react';
import styles from './trending.module.css'
import {useNavigate} from 'react-router-dom'

function Trending(props) {
    let navigate = useNavigate();
    function clickHandler(e) {
        navigate(`/news/${props.article._id}`)
    }
    return (
        <div id={props.article._id} onClick={clickHandler} className={styles['wrapper']}>
            <p className={styles['trending-p']}>TRENDING</p>
            <h1 className={styles['trending-heading']}>{props.article.title}</h1>
            <div className={styles['image-container']}>
                <img className={styles['trending-image']} src={props.article.urlToImage} alt='trending-image' loading='eager'/>
            </div>
        </div>
    )
}
export default Trending