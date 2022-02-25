import React from 'react'
import carLogos from '../../../assets/images/car_logos/car_logos'
import flags from '../../../assets/images/flags/flag-images'
import styles from './header.module.css'
function Header({image, name, flag}) {

    return (
        <div className={styles['main-container']}>
            <h2 className={styles.name}>{name}</h2>
            {image ? <div className={styles["image-container"]}>
                        <img src={carLogos[image]} alt='team-logo-image' loading='lazy'/>
                     </div>  
                     : null}
            {flag ? <div className={styles["flag-container"]}>
                        <img src={flags[flag]} alt='flag-image' loading='lazy'/>
                     </div>  
                     : null}
        </div>
    )
}

export default Header