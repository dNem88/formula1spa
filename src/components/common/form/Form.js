import React from 'react'
import styles from './form.module.css'

function Form({children, submitHandler, heading}) {

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <h2 className={styles.heading}>{heading}</h2>
            {children}
        </form>
    )
}

export default Form