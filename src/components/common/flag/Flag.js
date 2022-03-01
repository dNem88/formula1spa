import React from 'react'
import styles from './flag.module.css'
import flags from '../../../assets/images/flags/flag-images'

function Flag({imageBase, classname}) {
    
    return (
        <div className={styles[classname]}>
            <img src={flags[imageBase]} alt={`${imageBase}-flag`} loading='lazy'/>
        </div>
    )
}

export default Flag