import React from 'react'
import {Link} from 'react-router-dom'
import styles from './footer.module.css'
function Footer(props) {

    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-container']}>
                <Link to='/'>Home</Link>
                <Link to='/news'>News</Link>
                <Link to='/videos'>Videos</Link>
                <Link to='/schedule'>Schedule</Link>
                <Link to='/standings'>Standings</Link>
                <Link to='/drivers'>Drivers</Link>
                <Link to='/teams'>Teams</Link>
            </div>
            <div className={styles['strong-container']}>
                <strong>@Formula 1 React Project 2022</strong>
            </div>
        </footer>
    )
}

export default Footer