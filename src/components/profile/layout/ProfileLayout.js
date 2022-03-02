import React, {useContext} from 'react'
import userContext from '../../../context/userContext'
import {useNavigate, Link} from 'react-router-dom'
import styles from './profileLayout.module.css'

function ProfileLayout() {
    const context = useContext(userContext)
    const navigate = useNavigate()
    if (!context.isLogged) {
        navigate('/auth/login')
    }
    

    return (
        <section className={styles['main-container']}>
            <div className={styles['data-container']}>
                <h2>USER INFORMATION</h2>
                <label htmlFor={'username'}>Username</label>
                <input type='text' id='username' value={context.user.username} readOnly></input>
                <label htmlFor={'email'}>Email</label>
                <input type='text' id='email'  value={context.user.email} readOnly></input>
                <div className={styles['link-container']}>
                    <p>Back to homepage?</p>
                    <Link to={'/'}>View our homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default ProfileLayout