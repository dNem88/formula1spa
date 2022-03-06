import React from 'react'
import styles from './header.module.css'
function Header({image, name, flag}) {

    return (
        <div className={styles['main-container']}>
            <h2 className={styles.name}>{name}</h2>
            {image ? <div className={styles["image-container"]}>
                        <img src={`https://rtiovelu.sirv.com/Images/formula1/car_logos/${image}.jpg`} alt='team-logo-image' loading='lazy'/>
                     </div>  
                     : null}
            {flag ? <div className={styles["flag-container"]}>
                        <img src={`https://rtiovelu.sirv.com/Images/formula1/flags/${flag}.jpg`} alt='flag-image' loading='lazy'/>
                     </div>  
                     : null}
        </div>
    )
}

export default Header