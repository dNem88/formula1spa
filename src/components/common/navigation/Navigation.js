import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom'
import styles from './navigation.module.css'
import userContext from '../../../context/userContext'
import SignButton from '../authButton/SignButton'
import logo from '../../../assets/images/logos/logo.svg'
import authLogo from '../../../assets/images/logos/authLogo.svg'
import navigation from '../../../utils/navigation/navigation'
import NavLink from '../NavLink/NavLink';

function Navigation() {
    let context = useContext(userContext)
    let location = useLocation()
    const {guest} = navigation;
    
    return (
        <nav className={!location.pathname.startsWith('/auth') ? styles['nav'] : styles['authNav']
        }>
             <div className={styles['logo-container']}>
                <img src={location.pathname.startsWith('/auth') ? logo : authLogo} alt='logo'/>
            </div>
            {location.pathname.startsWith('/auth') ? null : 
                <div className={styles['links-container']}>
                    {guest.slice(0,7).map(x => {
                        return <NavLink key={x.href} {...x} classname={'desktop-link'}/>
                    })}
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
