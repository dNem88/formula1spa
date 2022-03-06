import React, {useState, useEffect} from 'react'
import styles from './clock.module.css'

function Clock() {
    let initialHours = new Date().getHours()
    let initialMinutes = new Date().getMinutes()
    if (+initialHours < 10) {
        initialHours = `0${initialHours}`
    }
    if (+initialMinutes < 10) {
        initialMinutes = `0${initialMinutes}`
    }
    let initial = `${initialHours} : ${initialMinutes}`
    let [time, setTime] = useState(initial);

    useEffect(() => {
        let timer = setTimeout(() => {
            let hours = new Date().getHours()
            let minutes = new Date().getMinutes()
            if (+hours < 10) {
                hours = `0${hours}`
            }
            if (+minutes < 10) {
                minutes = `0${minutes}`
            }
            
            let newTime = `${hours} : ${minutes}`
            
            setTime(newTime)
        }, 60000)

        return () => {
            clearTimeout(timer)
        }
    }, [time])


    return (
        <div className={styles['clock-banner-container']}>
            <div className={styles['clock']}>
                <img src={'https://rtiovelu.sirv.com/Images/formula1/clock.png'} alt='clock'/>
            </div>
            <div className={styles['time-container']}>
                <p >Your Time</p>
                <p className={styles['thicking']}>{time}</p>
            </div>
        </div>
    )
}


export default Clock