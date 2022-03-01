import React from 'react'

import styles from './slider.module.css'

function Slider({children}) {

    return (
        <div className={styles.slider}>{children}</div>
    )
}

export default Slider