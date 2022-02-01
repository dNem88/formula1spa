import React from 'react';
import {Link} from 'react-router-dom'
import styles from './navigation.module.css'

function Navigation() {
    return (
        <nav>
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
                <button>SIGN IN</button>
                <button>SIGN UP</button>
            </div>
        </nav>
    )
}

export default Navigation
