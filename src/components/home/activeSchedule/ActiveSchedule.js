import React, {useEffect, useState} from 'react'
import styles from './activeSchedule.module.css'
import Flag from '../flag/Flag'
import Clock from '../ScheduleClock/Clock';
import RaceTime from '../ScheduleRaceStart/RaceTime';

function ActiveSchedule(props) {
    let raceTitle = `formula 1 ${props.raceName} ${props.season}`.toUpperCase();
    
    return (
        <div className={styles['wrapper']}>
            <div className={styles['content-container']}>
                <Flag classname={props.classname} imageBase={props.imageBase}/>
                <h5 className={styles.country}>{props.country}</h5>
                <h2 className={styles["gp-name"]}>{raceTitle}</h2>
                <h6 className={styles['weekend-duration']}>{props.weekend}</h6>
            </div>
            <Clock/>
            <RaceTime raceStartUTC={props.raceStartUTC}/>
        </div>
    )
}

export default ActiveSchedule