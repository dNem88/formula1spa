import React , {Fragment} from 'react';
import styles from './trending.module.css'

function Trending() {
    /*make the api call for trending topics from here*/
    return (
        <Fragment>
            <p className={styles['trending-p']}>TRENDING</p>
            <h1 className={styles['trending-heading']}>Analysyis: What Haaas' VF-22 can teach us about how teams have approached the 2022 regulations</h1>
            <div className={styles['image-container']}>
                <img className={styles['trending-img']} src='https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/HaasVF22Launch/MSC%20Rear.jpg.transform/6col/image.jpg' alt='someAlt'/>
            </div>
        </Fragment>
    )
}
export default Trending