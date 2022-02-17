import React from 'react'
import styles from './driverPoints.module.css'
function DriverPoints(props) {
    const driver = props.driver.split(' ')
    const firstName = driver[0]
    const lastName = driver[1]
    return (
        <div className={styles['driver-row']}>
            <span>{props.position}</span>
            <p>{firstName}</p>
            <span>{lastName}</span>
            <p>{props.team}</p>
            <span>{props.points}</span>
        </div>
    )
}

export default DriverPoints