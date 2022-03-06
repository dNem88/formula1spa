import React from 'react'
import styles from './flag.module.css'


function Flag({imageBase, classname}) {
    
    return (
        <div className={styles[classname]}>
            <img src={`https://rtiovelu.sirv.com/Images/formula1/flags/${imageBase}.jpg`} alt={`${imageBase}-flag`} loading='lazy'/>
        </div>
    )
}

export default Flag