import React, {useContext,  Fragment} from 'react';
import {Link} from 'react-router-dom'
import styles from './navigation.module.css'
import userContext from '../../../context/userContext'
import SignButton from '../authButton/SignButton'
function Navigation() {
    let context = useContext(userContext)
    console.log('context from navigation', context)
    return (
        <nav>
        {(context.isLogged === 'initial' && context.user === null) ? <p>Loading....</p> : 
            <Fragment>
                 <div className={styles['logo-container']}>
                    <img src={'https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg'}/>
                </div>
                <div className={styles['links-container']}>
                    <Link to='/latest'>Latest</Link>
                    <Link to='/video'>Video</Link>
                    <Link to='/schedule'>Schedule</Link>
                    <Link to='/standings'>Standings</Link>
                    <Link to='/drivers'>Drivers</Link>
                    <Link to='/teams'>Teams</Link>
                </div>
                <div className={styles['auth-container']}>
                    {context.isLogged === false ? <SignButton href={'/login'} textContent={'Sign in'}/> : null} 
                    {context.isLogged === false ? <SignButton href={'/register'} textContent={'Register'}/> : null} 
                    {context.isLogged === true ? <SignButton href={'/profile'} textContent={'Profile'}/> : null}
                </div>
            </Fragment>
        }
        </nav>
    )
}

export default Navigation
