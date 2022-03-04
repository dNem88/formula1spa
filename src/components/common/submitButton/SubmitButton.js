import React from 'react'
import styles from './submitButton.module.css'

const SubmitButton = React.forwardRef((props, ref) => {

    return (
        <button className={styles.submitBtn} type='submit' ref={ref} >{props.text}</button>
    )
}) 

export default SubmitButton