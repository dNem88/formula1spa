import React, {Fragment, useRef, useEffect} from 'react'
import styles from './schedule.module.css'
import Flag from '../flag/Flag'
import transformSchedule from '../../../utils/common/transformSchedule'


function Schedule(props) {
    const transformedProps = transformSchedule(props);
    useEffect(() => {
        if (typeof(props.setClasses) !== 'string') {
            props.setClasses(`${styles['active-main-container']}`, `${styles['main-container']}`)
        }
    }, [])
    return (
        <div id={props._id} className={styles[props.className]} onClick={props.clickHandler}>
            <Flag imageBase={transformedProps.imageBase}/>
            {
                (props.className === 'main-container' || `${styles['main-container']}`) ?
                <Fragment>
                    <h3 className={styles.country}>{transformedProps.country}</h3>
                    <h1 className={styles.day}>{transformedProps.day}</h1>
                    <h3 className={styles.month}>{transformedProps.month}</h3>
                </Fragment> : <p>New Component</p>}
            
        </div>
    )
}

export default Schedule