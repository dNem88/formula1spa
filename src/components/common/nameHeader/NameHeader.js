import React from 'react'
import styles from './nameHeader.module.css'

function NameHeader({name}) {

    return (
        <div className={styles['main-container']}>
            <h1>{name}</h1>
        </div>
    )
}

export default NameHeader