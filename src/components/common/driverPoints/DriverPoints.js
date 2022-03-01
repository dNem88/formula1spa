import React from 'react'
import styles from './driverPoints.module.css'

function DriverPoints({driver, position, team, points}) {
    const fullName = driver.split(' ')
    const firstName = fullName[0]
    const lastName = fullName[1]
    return (
        <div className={styles['driver-row']}>
            <p>{position}</p>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{team}</p>
            <p>{points}</p>
        </div>
    )
}

export default DriverPoints