import React, {useContext} from 'react';
import {Link, useLocation} from 'react-router-dom'
import styles from './navigation.module.css'
import userContext from '../../../context/userContext'
import SignButton from '../authButton/SignButton'
import logo from '../../../assets/images/logos/logo.svg'
import authLogo from '../../../assets/images/logos/authLogo.svg'

function Navigation() {
    let context = useContext(userContext)
    let location = useLocation()
   
    return (
        <nav className={!location.pathname.startsWith('/auth') ? styles['nav'] : styles['authNav']
        }>
             <div className={styles['logo-container']}>
                <img src={location.pathname.startsWith('/auth') ? logo : authLogo} alt='logo'/>
            </div>
            {location.pathname.startsWith('/auth') ? null : 
                <div className={styles['links-container']}>
                    <Link to='/'>Home</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/videos'>Videos</Link>
                    <Link to='/schedule'>Schedule</Link>
                    <Link to='/standings'>Standings</Link>
                    <Link to='/drivers'>Drivers</Link>
                    <Link to='/teams'>Teams</Link>
                </div>}
            {!location.pathname.startsWith('/auth') ? 
                <div className={styles['auth-container']}>    
                    {context.isLogged === false ?     <SignButton href={'/auth/login'} textContent= {'Sign in'}/> : null} 
                    {context.isLogged === false ? <SignButton href={'/auth/register'} textContent={'Register'}/> : null} 
                    {context.isLogged === true ? <SignButton href={'/auth/profile'} textContent={'Profile'}/> : null}
                </div> : <div className={styles['auth-container']}></div>}
        </nav>
    )
}

export default Navigation
