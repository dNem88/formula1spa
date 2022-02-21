import React from 'react'
import styles from './eventSchedule.module.css'
import flags from '../../../assets/images/flags/flag-images'

function EventSchedule(props) {

    return (
        <section className={styles['main-container']}>
            <p className={styles['legend']}>ROUND 1</p>
            <div className={styles['date-container']}>
                <div className={styles['date-sub-container']}>
                    <span>23-25</span>
                    <span>FEB</span>
                </div>
                <div className={styles['flag-container']}>
                    <img src={flags['austria']} alt='national-flag' loading='lazy'/>
                </div>
            </div>
            <div className={styles['race-name-container']}>
                <div className={styles['race-sub-container']}>
                    <span>Austria</span>
                    <span>FORMULA 1 PRES-SEASON TRACK SESSION 2022</span>
                </div>
            </div>
            <div className={styles['image-container']}>
                <img src={'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png'} alt='race-track-image' loading='lazy'/>
            </div>
        </section>
    )
}

export default EventSchedule