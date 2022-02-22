import React from 'react'
import styles from './commonHeader.module.css'


function CommonHeader(props){

    return (
        <div className={styles['wrapper']}>
            <div className={styles.header}>
                <h1>{props.header}</h1>
            </div>
            <div>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}

export default CommonHeader