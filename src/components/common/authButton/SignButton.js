import React from 'react';
import {Link} from 'react-router-dom'
import styles from './signButton.module.css'
function SignButton(props) {

    return (
        <Link className={styles.link} to={props.href}>{props.textContent}</Link>
    )
}

export default SignButton;