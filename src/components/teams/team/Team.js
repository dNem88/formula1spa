import React from 'react'
import styles from './team.module.css'
import {useNavigate} from 'react-router-dom'
import TeamDriver from '../teamDriver/TeamDriver'

function Team(props) {
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
                    <img src={`https://rtiovelu.sirv.com/Images/formula1/car_logos/${props.image}.jpg`} alt='team-logo' loading='lazy'/>
                </div>
            </div>
            {props.drivers.map( x => {
                return <TeamDriver key={x} name={x} image={x.split(' ')[1].toLowerCase()}/>
            })}
            <div className={styles['flex-wrapper']}>
                <img src={`https://rtiovelu.sirv.com/Images/formula1/teams/${props.image}.jpg`} alt='f1-team-image' loading='lazy'/>
            </div>
        </section>
    )
}

export default Team