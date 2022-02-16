import React from 'react'
import styles from './raceTime.module.css'
import convertRaceTime from '../../../utils/common/converRaceTime'

function RaceTime(props) {
    const [utcTime, localTime] = convertRaceTime(props.raceStartUTC)
   
    return (
        <table className={styles['race-time-container']}>
            <tbody>
                <tr>
                    <td className={styles['left-td']}>Race</td>
                    <td className={styles['right-td']}></td>
                </tr>
                <tr>
                    <td className={styles['left-td']}>Your Local Time</td>
                    <td className={styles['right-td']}>{localTime}</td>
                </tr>
                <tr>
                    <td className={styles['left-td']}>GMT Time</td>
                    <td className={styles['right-td']}>{utcTime}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default RaceTime