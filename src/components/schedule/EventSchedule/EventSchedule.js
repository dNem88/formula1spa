import React from 'react'
import styles from './eventSchedule.module.css'
import flags from '../../../assets/images/flags/flag-images'
import circuits from '../../../assets/images/circuits/circuit-images'

function EventSchedule(props) {
    let dates;
    if (props.weekend) {
        dates = props.weekend.split('-').map(x => x.trim().split(" ")[0])
    }
    return (
        <section className={styles['main-container']}>
            <p className={styles['legend']}>ROUND {props.round}</p>
            <div className={styles['date-container']}>
                <div className={styles['date-sub-container']}>
                    <span>{dates.join('-') || ''}</span>
                    <span>{props.month}</span>
                </div>
                <div className={styles['flag-container']}>
                    <img src={flags[props.imageBase]} alt='national-flag' loading='lazy'/>
                </div>
            </div>
            <div className={styles['race-name-container']}>
                <div className={styles['race-sub-container']}>
                    <span>{props.country}</span>
                    <span>FORMULA 1 {props.raceName.toUpperCase()} 2022</span>
                </div>
            </div>
            <div className={styles['image-container']}>
                <img src={circuits[props.imageBase]} alt='race-track-image' loading='lazy'/>
            </div>
        </section>
    )
}

export default EventSchedule