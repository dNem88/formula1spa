import React from 'react'
import styles from './formRedirect.module.css'
import {Link} from 'react-router-dom'

const FormRedirect = ({label, linkText,href}) => {
    return (
        <div className={styles['link-container']}>
            <p>{label}</p>
            <Link to={href}>{linkText}</Link>
        </div>
    )
}

export default FormRedirect