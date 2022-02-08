import React from 'react'
import styles from './schedule.module.css'
import Flag from '../flag/Flag'

function Schedule(props) {
    return (
        <div className={styles['main-container']}>
            <Flag/>
            <h3 className={styles.country}>GREAT BRITAIN</h3>
            <h1 className={styles.day}>29</h1>
            <h3 className={styles.month}>JUL</h3>
        </div>
    )
}

export default Schedule