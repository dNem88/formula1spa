import React, {Fragment} from 'react'
import EventSchedule from '../EventSchedule/EventSchedule'

function ScheduleList({fullSchedule}) {
    
    return (
        <Fragment>
            {fullSchedule ? 
                fullSchedule.map((x,i) => {
                    x.round = i+1;
                    if (x.imageBase === 'italy' && x.month === 'SEP') {
                        x.imageBase = 'italy_sep'
                    }
                    return <EventSchedule key={x.raceStartUTC} {...x}/>
                })
            : null}
        </Fragment>
    )
}

export default ScheduleList