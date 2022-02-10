import React, {useState, Fragment, useRef, useEffect} from 'react'
import styles from './schedule.module.css'
import Flag from '../flag/Flag'
import transformSchedule from '../../../utils/common/transformSchedule'


function Schedule(props) {
    const transformedProps = transformSchedule(props);
    let classname = 'main-container'
    if (props._id === props.activeId) {
        classname = 'active-main-container'
    } else {
        classname = 'main-container'
    }
 
    return (
        <div id={props._id} className={styles[classname]} onClick={props.clickHandler}>
            <Flag imageBase={transformedProps.imageBase}/>
            {classname === 'main-container' ? 
                <Fragment>
                    <h3 className={styles.country}>{transformedProps.country}</h3>
                    <h1 className={styles.day}>{transformedProps.day}</h1>
                    <h3 className={styles.month}>{transformedProps.month}</h3>
                </Fragment> : <p>New Component</p>}
            
        </div>
    )
}

export default Schedule