import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import styles from './mobileNavigation.module.css'
import userContext from '../../../context/userContext'
import ActiveMobileNavigation from '../activeMobileNavigation/ActiveMobileNavigation';

function MobileNavigation() {
    let context = useContext(userContext)
    const [navigation, setNavigation] = useState({active: false})
    function clickHandler(e) {
        setNavigation({active: !navigation.active})
    }

        return (
                <nav className={styles['nav']}>
                    <div onClick={clickHandler} className={styles['hamburger-icon-container']}>
                        <img src={navigation.active ? "https://rtiovelu.sirv.com/Images/formula1/navigation/xicon.svg" : "https://rtiovelu.sirv.com/Images/formula1/navigation/menu.svg"} alt='menu-icon'/>
                    </div>
                    <div className={styles['logo-container']}>
                        <img src={"https://rtiovelu.sirv.com/Images/formula1/logos/logo.svg"} alt='formula1-logo'/>
                    </div>
                    <div className={styles['profile-icon-container']}>
                        {context.isLogged && context.user ? <Link to={'/auth/profile'}><img src={"https://rtiovelu.sirv.com/Images/formula1/navigation/profile.svg"} alt='profile-icon'/></Link> : ''} 
                    </div>
                    {(navigation.active) ? <ActiveMobileNavigation click={clickHandler} isLogged={context.isLogged}/> : null}
                </nav>
        )
    
    
}

export default MobileNavigation