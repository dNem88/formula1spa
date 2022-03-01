import React from 'react'
import styles from './footer.module.css'
import NavLink from '../NavLink/NavLink'
import navigation from '../../../utils/navigation/navigation'

function Footer() {
    const {guest} = navigation
    
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-container']}>
                {guest.slice(0,7).map(x => {
                        return <NavLink key={x.href} {...x} classname={'footer-link'}/>
                    })}
            </div>
            <div className={styles['strong-container']}>
                <strong>@Formula 1 React Project 2022</strong>
            </div>
        </footer>
    )
}

export default Footer