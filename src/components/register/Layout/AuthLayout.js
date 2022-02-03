import React from 'react'
import {Outlet} from 'react-router-dom'
import SelectForm from '../Select/SelectForm'
import styles from './authLayout.module.css'
function AuthLayout() {
    return (
        <div className={styles.container}>
            <SelectForm/>
            <div className={styles['form-container']}>
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthLayout