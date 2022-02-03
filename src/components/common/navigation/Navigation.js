import React, {useContext,  Fragment} from 'react';
import {Link, useLocation} from 'react-router-dom'
import styles from './navigation.module.css'
import userContext from '../../../context/userContext'
import SignButton from '../authButton/SignButton'
function Navigation() {
    let context = useContext(userContext)
    let location = useLocation()
    // console.log(location.pathname.startsWith('/auth'))
    // console.log('context from navigation', context)
    return (
        < nav className = {
            !location.pathname.startsWith('/auth') ? styles['nav'] : styles['authNav']
        } >
        {(context.isLogged === 'initial' && context.user === null) ? <p>Loading....</p> : 
            <Fragment>
                 <div className={styles['logo-container']}>
                    <img src={location.pathname.startsWith('/auth') ? 'https://account.formula1.com/images/f1_logo.svg' : 'https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg'
                    }
                    />
                </div>
                {location.pathname.startsWith('/auth') ? null : 
                    <div className={styles['links-container']}>
                        <Link to='/latest'>Latest</Link>
                        <Link to='/video'>Video</Link>
                        <Link to='/schedule'>Schedule</Link>
                        <Link to='/standings'>Standings</Link>
                        <Link to='/drivers'>Drivers</Link>
                        <Link to='/teams'>Teams</Link>
                    </div>}
                
                {!location.pathname.startsWith('/auth') ? <div className={styles['auth-container']}>
                    {context.isLogged === false ? <SignButton href={'/auth/login'} textContent={'Sign in'}/> : null} 
                    {context.isLogged === false ? <SignButton href={'/auth/register'} textContent={'Register'}/> : null} 
                    {context.isLogged === true ? <SignButton href={'/auth/profile'} textContent={'Profile'}/> : null}
                </div> : <div className={styles['auth-container']}></div>}
                
            </Fragment>
        }
        </nav>
    )
}

export default Navigation
