import React from 'react'
import styles from './commonHeader.module.css'


function CommonHeader({header, description}){

    return (
        <div className={styles['wrapper']}>
            <div className={styles.header}>
                <h1>{header}</h1>
            </div>
            <div className={styles.description}>
                <p >{description}</p>
            </div>
        </div>
    )
}

export default CommonHeader