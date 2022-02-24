import React from 'react'
import carLogos from '../../../assets/images/car_logos/car_logos'
import styles from './header.module.css'
function Header({image, name}) {

    return (
        <div className={styles['main-container']}>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles["image-container"]}>
                <img src={carLogos[image]} alt='team-logo-image' loading='lazy'/>
            </div>
        </div>
    )
}

export default Header