import React from 'react'
import styles from './activeSchedule.module.css'
import Flag from '../flag/Flag'

function ActiveSchedule(props) {
    let raceTitle = `formula 1 ${props.raceName} ${props.season}`.toUpperCase();

    return (
        <div className={styles['wrapper']}>
            <div className={styles['content-container']}>
                <Flag classname={'left-flag'} imageBase={props.imageBase}/>
                <h5 className={styles.country}>{props.country}</h5>
                <h2 className={styles["gp-name"]}>{raceTitle}</h2>
                <h6 className={styles['weekend-duration']}>{props.weekend}</h6>
            </div>
            <div className={styles['clock-banner-container']}>

            </div>
            <div className={styles['table-container']}>

            </div>
        </div>
    )
}

export default ActiveSchedule