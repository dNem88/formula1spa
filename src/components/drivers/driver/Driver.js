import React from 'react'
import styles from './driver.module.css'
import {useNavigate} from 'react-router-dom'

function Driver(props) {
    const navigate = useNavigate()
    
    function clickHandler(e) {
        console.log(e.target)
        navigate(`/drivers/${props._id}`)
    }

    return (
         <section id={props._id} className={styles['main-container']} onClick={clickHandler}>
            <div className={styles['driver-name-container']}>
                <div className={styles['name-sub-container']}>
                    <span>{props.givenName}</span>
                    <span>{props.familyName}</span>
                </div>
                <div className={styles['flag-container']}>
                    <img src={
                        `https://rtiovelu.sirv.com/Images/formula1/flags/${props.country.toLowerCase()}.jpg`
                    }
                    alt='national-flag'
                    loading='lazy'/>
                </div>
            </div>
            <div className={styles['grid-wrapper']}>
                <p className={styles['team-name']}>{props.team}</p>
                <p className={styles['race-number']}>{props.permanentNumber}</p>
                <div className={styles['image-container']}>
                    <img src={`https://rtiovelu.sirv.com/Images/formula1/drivers/${props.familyName.toLowerCase()}.jpg`} alt='f1-driver-image' loading='lazy'/>
                </div>
            </div>
        </section>
    )
}

export default Driver