import React from 'react';
import {Link} from 'react-router-dom'
import styles from './signButton.module.css'
function SignButton({textContent, href}) {

    return (
        <Link className={styles.link} to={href}>{textContent}</Link>
    )
}

export default SignButton;