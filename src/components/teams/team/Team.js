import React from 'react'
import styles from './team.module.css'
import carLogos from '../../../assets/images/car_logos/car_logos'
import teams from '../../../assets/images/teams/teams'
import {useNavigate} from 'react-router-dom'
import TeamDriver from '../teamDriver/TeamDriver'

function Driver(props) {
    const navigate = useNavigate()
    
    function clickHandler(e) {
        navigate(`/teams/${props._id}`)
    }

    return (
         <section id={props._id} className={styles['main-container']} onClick={clickHandler}>
            <div className={styles['team-name-container']}>
                <div className={styles['name-sub-container']}>
                    <span>{props.name}</span>
                </div>
                <div className={styles['logo-container']}>
                    <img src={carLogos[props.image]} alt='team-logo' loading='lazy'/>
                </div>
            </div>
            {props.drivers.map( x => {
                return <TeamDriver name={x} image={x.split(' ')[1].toLowerCase()}/>
            })}
            <div className={styles['flex-wrapper']}>
                <img src={teams[props.image]} alt='f1-team-image' loading='lazy'/>
            </div>
        </section>
    )
}

export default Driver