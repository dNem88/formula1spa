import React from 'react'
import styles from './MainSpinner.module.css'
import {useLocation} from 'react-router-dom'

function MainSpinner() {
    const {pathname} = useLocation()
    

    return (
        <main className={styles[`main-${(pathname.includes('videos') ? "dark" : 'light')}`]}>
            <div className={styles["lds-ring"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </main>
        
    )
}

export default MainSpinner
