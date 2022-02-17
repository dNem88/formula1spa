import React, {useContext, useState, Fragment} from 'react';
import {Link} from 'react-router-dom'
import styles from './mobileNavigation.module.css'
import userContext from '../../../context/userContext'
import logo from '../../../assets/images/logos/logo.svg'
import menu from '../../../assets/images/navigation/menu.svg'
import profile from '../../../assets/images/navigation/profile.svg'
import xicon from '../../../assets/images/navigation/xicon.svg'
import ActiveMobileNavigation from '../activeMobileNavigation/ActiveMobileNavigation';

function MobileNavigation(props) {
    let context = useContext(userContext)
    const [navigation, setNavigation] = useState({active: false})
    function clickHandler(e) {
        setNavigation({active: !navigation.active})
    }

        return (
            <Fragment>
                <nav className={styles['nav']}>
                    <div onClick={clickHandler} className={styles['hamburger-icon-container']}>
                        <img src={navigation.active ? xicon : menu}/>
                    </div>
                    <div className={styles['logo-container']}>
                        <img src={logo}/>
                    </div>
                    <div className={styles['profile-icon-container']}>
                        {context.isLogged && context.user ? <Link to={'/profile'}><img src={profile}/></Link> : ''} 
                    </div>
                    {(navigation.active) ? <ActiveMobileNavigation click={clickHandler} isLogged={context.isLogged}/> : null}
                </nav>
                
            </Fragment>
        )
    
    
}

export default MobileNavigation