import React, {useState, useEffect, Fragment} from 'react'
import Schedule from '../schedule/Schedule';
import Slider from '../slider/Slider';
import Spinner from '../../common/spinner/Spinner';
import ErrorComp from '../../common/errorComp/ErrorComp';
import useSchedule from '../../../hooks/useSchedule';
import compareDates from '../../../utils/common/compareDates';
import styles from './scheduleWrapper.module.css'

function ScheduleWrapper() {
    const fullSchedule = useSchedule();
    const [schedule, setSchedule] = useState({
        activeId: '',
        fetch: false
    })
    let upcomingRaceId
    if (fullSchedule.schedule && schedule.fetch === false) {
        upcomingRaceId = compareDates(fullSchedule.schedule)
    }
    useEffect(() => {
        if (upcomingRaceId ) {
            setSchedule({
                activeId: upcomingRaceId,
                fetch: true
            })
        }
    }, [upcomingRaceId])
    
     function scheduleClickHandler(e) {
         setSchedule({...schedule, activeId: e.target.id})
     }
     if (fullSchedule.error && fullSchedule.hasError) {
         return <ErrorComp errorMessage={fullSchedule.error}/>
     }
    if (fullSchedule.schedule && !fullSchedule.hasError) {
        return (
        
            <section className={styles['schedule']}>
                    <Slider>
                        {fullSchedule.schedule ? fullSchedule.schedule.map((x,i) => {
                            return <Schedule clickHandler={scheduleClickHandler} key={x._id} {...x} activeId={schedule.activeId}/>
                        }) : <Spinner/>}
                    </Slider>
            </section>  
            )
    } else if (!fullSchedule.schedule && !fullSchedule.hasError) {
        return <Spinner/>
    }
    
}

export default ScheduleWrapper