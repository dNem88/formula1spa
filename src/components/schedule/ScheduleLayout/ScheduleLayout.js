import React, {Fragment, useEffect, useState} from 'react'
import ScheduleList from '../ScheduleList/ScheduleList'
import styles from './scheduleLayout.module.css'
import ErrorComp from '../../common/errorComp/ErrorComp'

import transformSchedule from '../../../utils/common/transformSchedule'
import schedule from '../../../utils/api/heroku_api/schedule'
import CommonHeader from '../../common/titleHeader/CommonHeader'
const headerProps = {
    header: 'F1 Schedule 2022',
    description: 'A record 23-race Formula 1 calendar for 2022, including the inaugural Miami Grand Prix*. Click on any Grand Prix for full F1 schedule details, dates, times & full weekend program. *Subject to circuit homologation.'
}
function ScheduleLayout() {

    const [state, setState] = useState({fullSchedule: null, error: null, errorMessage: null})


    useEffect(() => {
        async function FetchSchedule() {
            try {
                let response = await schedule.getFullSchedule()
                if (!response.ok) {
                    throw new Error('Failed to fetch fullSchedule!')
                }
                let json = await response.json()
                if (json.length < 20) {
                    throw new Error('Failed to get schedule! Some of the tracks are missing!')
                }
                const transformed = json.map(transformSchedule)
                setState({error: null, errorMessage: null, fullSchedule: transformed,})
            } catch(err) {
                setState({fullSchedule: null, error: true, errorMessage: err.message})
            }
        }
        FetchSchedule()
    }, [])
 
    return (
        <div className={styles['main-container']}>
             <CommonHeader {...headerProps} />
            {state.error ? <ErrorComp errorMessage={state.errorMessage}/> : null}
            {state.fullSchedule ? 
               <ScheduleList fullSchedule={state.fullSchedule}/> : null}
        </div>
    )
}

export default ScheduleLayout