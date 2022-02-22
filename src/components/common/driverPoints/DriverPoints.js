import React from 'react'
import styles from './driverPoints.module.css'
function DriverPoints(props) {
    const driver = props.driver.split(' ')
    const firstName = driver[0]
    const lastName = driver[1]
    return (
        <div className={styles['driver-row']}>
            <p>{props.position}</p>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{props.team}</p>
            <p>{props.points}</p>
        </div>
    )
}

export default DriverPoints