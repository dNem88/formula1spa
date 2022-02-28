import React from 'react'
import styles from './NewsContainer.module.css'
import {useNavigate} from 'react-router-dom'

function NewsContainer({id, path, type, children}) {

    let navigate = useNavigate();

    function clickHandler(e) {
        navigate(`/${path}/${id}`)
    }

    return (
        <div onClick={clickHandler} id={id} className={styles[`main-container-${type}`]}>
            {children}
        </div>
    )
}

export default NewsContainer