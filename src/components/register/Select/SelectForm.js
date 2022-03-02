import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import styles from './selectForm.module.css'

function SelectForm(props) {
    const location = useLocation()
   
    
    if (props.location === 'auth') {
        return (
        <div className={styles.container}>
            <Link className={location.pathname.includes('/auth/login') ? styles['active-link'] : ''} to={'/auth/login'}>Sign in</Link>
            <Link className={location.pathname.includes('/auth/register') ? styles['active-link'] : ''} to={'/auth/register'}>Register</Link>
        </div>
    )
    }
    if (props.location === 'profile') {
        return (
        <div className={styles.container}>
            <Link className={styles['active-link']} to={'/auth/profile'}>Profile</Link>
        </div>
    )
    }
    if (props.location === 'standings') {
        return (
        <div className={styles.container}>
            <Link className={location.pathname.includes('/standings/drivers') ? styles['active-link'] : ''} to={'/standings/drivers'}>Drivers</Link>
            <Link className={location.pathname.includes('/standings/constructors') ? styles['active-link'] : ''} to={'/standings/constructors'}>Constructors</Link>
        </div>
    )
    }
    
}

export default SelectForm