import React from 'react'
import styles from './fieldset.module.css'

 function Fieldset({size, content, color, children}) {

    return (
         <fieldset className={styles[`fieldset-${size}`]}>
                <legend className={styles[`legend-${color}`]}>{content}</legend>
                {children}
        </fieldset>
    )

}

export default Fieldset