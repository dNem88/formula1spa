import React from 'react'
import styles from './flag.module.css'
import flags from '../../../assets/images/flags/flag-images'

function Flag(props) {
    
    return (
        <div className={styles['image-container']}>
            <img src={flags[props.imageBase]} alt={'flag'}/>
        </div>
    )
}

export default Flag