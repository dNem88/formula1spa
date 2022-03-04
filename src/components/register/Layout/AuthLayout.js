import React, {useContext} from 'react'
import {Outlet} from 'react-router-dom'
import SelectForm from '../Select/SelectForm'
import styles from './authLayout.module.css'
import {useLocation, useNavigate} from 'react-router-dom'
import userContext from '../../../context/userContext'

function AuthLayout() {
    const location = useLocation()
    const context = useContext(userContext)
    const navigate = useNavigate()
    
    if (context.isLogged === true && location.pathname.includes('auth/login')) {
        navigate('/')
    }
    if (context.isLogged === true && location.pathname.includes('auth/register')) {
        navigate('/')
    }
    if (context.isLogged === false && location.pathname.includes('auth/profile')) {
        navigate('/auth/login')
    }

    return (
        <div className={styles.container}>
            {location.pathname === '/auth/profile' ? <SelectForm location={'profile'}/> : <SelectForm location={'auth'}/>}
            <div className={styles['form-container']}>
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthLayout