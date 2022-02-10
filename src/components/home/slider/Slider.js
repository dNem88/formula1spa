import React from 'react'

import styles from './slider.module.css'

function Slider(props) {

    return (
        <div className={styles.slider}>{props.children}</div>
    )
}

export default Slider