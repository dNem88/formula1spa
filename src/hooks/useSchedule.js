import React, {useState, useEffect} from 'react'
import schedule from '../utils/api/heroku_api/schedule'


function useSchedule() {
    const [raceSchedule, setRaceSchedule] = useState({schedule: null, error: null, hasError: null})

    useEffect(() => {
        async function FetchSchedule() {
            try {
                let response = await schedule.getFullSchedule()
                if (!response.ok) {
                    throw new Error('Failed to fetch schedule!!!')
                }
                let scheduleList = await response.json()
                if (scheduleList.length < 15) {
                    throw new Error('Could not get full schedule!!!')
                }
                setRaceSchedule({schedule: scheduleList, error: null, hasError: null})
            } catch(err) {
                setRaceSchedule({schedule: null, error: err.message, hasError: true})
            }
        }
        FetchSchedule()
    }, [])
    return raceSchedule;
}

export default useSchedule