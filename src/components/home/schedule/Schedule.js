import React, {Fragment} from 'react'
import styles from './schedule.module.css'
import Flag from '../../common/flag/Flag'
import transformSchedule from '../../../utils/common/transformSchedule'
import ActiveSchedule from '../activeSchedule/ActiveSchedule'

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
            {classname === 'main-container' ? 
                <Fragment>
                    <Flag classname={'image-container'} imageBase={transformedProps.imageBase}/>
                    <h3 className={styles.country}>{transformedProps.country}</h3>
                    <h1 className={styles.day}>{transformedProps.day}</h1>
                    <h3 className={styles.month}>{transformedProps.month}</h3>
                </Fragment> : <ActiveSchedule {...transformedProps} classname={'left-flag'}/>}
            
        </div>
    )
}

export default Schedule