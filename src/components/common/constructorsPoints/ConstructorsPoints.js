import React from 'react'
import styles from './constructorsPoints.module.css'


function ConstructorsPoints({position, constructor, nationality, points}) {
    
    return (
        <div className={styles['driver-row']}>
            <p>{position}</p>
            <p>{constructor}</p>
            <p></p>
            <p>{nationality}</p>
            <p>{points}</p>
        </div>
    )
}

export default ConstructorsPoints