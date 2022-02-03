import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import styles from './selectForm.module.css'

function SelectForm() {
    const location = useLocation()
    return (
        <div className={styles.container}>
            <Link className={location.pathname.includes('/auth/login') ? styles['active-link'] : ''} to={'/auth/login'}>Sign in</Link>
            <Link className={location.pathname.includes('/auth/register') ? styles['active-link'] : ''} to={'/auth/register'}>Register</Link>
        </div>
    )
}

export default SelectForm