import React from 'react'
import styles from './constructorsPoints.module.css'


function ConstructorsPoints(props) {
    
    return (
        <div className={styles['driver-row']}>
            <p>{props.position}</p>
            <p>{props.constructor}</p>
            <p></p>
            <p>{props.nationality}</p>
            <p>{props.points}</p>
        </div>
    )
}

export default ConstructorsPoints