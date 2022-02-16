import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom'
import styles from './activeMobileNavigation.module.css'

function ActiveMobileNavigation(props) {

    return (
           <div onClick={props.click} className={styles['links-container']}>
                <Link to='/'>Home</Link>
                <Link to='/news'>News</Link>
                <Link to='/videos'>Videos</Link>
                <Link to='/schedule'>Schedule</Link>
                <Link to='/standings'>Standings</Link>
                <Link to='/drivers'>Drivers</Link>
                <Link to='/teams'>Teams</Link>
                {props.isLogged ? <Link to='/profile'>Profile</Link> : 
                <Fragment>
                    <Link to='/auth/login'>Sign in</Link>
                    <Link to='/auth/register'>Register</Link>
                </Fragment>}
           </div>
    )
}

export default ActiveMobileNavigation