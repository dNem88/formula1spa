import React from 'react'
import styles from './teamDriver.module.css'
import drivers from '../../../assets/images/drivers/driver-images'


function TeamDriver({name, image}) {

    return (
        <div className={styles['main-container']}>
            <div className={styles['name-container']}>
                <p>{name.split(' ')[0]} <span>{name.split(' ')[1]}</span></p>
            </div>
            <div className={styles['driver-image-container']}>
                <img src={drivers[image]} alt='driver-image' loading='lazy'/>
            </div>
        </div>
    )
}

export default TeamDriver