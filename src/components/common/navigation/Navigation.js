import React, {useContext, useEffect, Fragment} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import styles from './navigation.module.css'
import userContext from '../../../context/userContext'

function Navigation() {
    let context = useContext(userContext)
    console.log('context from navigation', context)
    return (
        <nav>
        {(context.isLogged === 'initial' && context.user === null) ? <p>Loading....</p> : 
            <Fragment>
                 <div className='logo-container'>
                    <p>Some logo here</p>
                </div>
                <div className='links-container'>
                    <Link to='/latest'>Latest</Link>
                    <Link to='/video'>Video</Link>
                    <Link to='/schedule'>Schedule</Link>
                    <Link to='/standings'>Standings</Link>
                    <Link to='/drivers'>Drivers</Link>
                    <Link to='/teams'>Teams</Link>
                </div>
                <div className='auth-container'>
                    {context.isLogged === false ? <button onClick={context.login}>SIGN IN</button> : null} 
                    {context.isLogged === true ? <button onClick={context.logout}>Profile</button> : null}
                </div>
            </Fragment>
        }
        </nav>
    )
}

export default Navigation
