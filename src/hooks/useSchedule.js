import React, {useState, useEffect} from 'react'
import schedule from '../utils/api/heroku_api/schedule'


function useSchedule() {
    const [raceSchedule, setRaceSchedule] = useState({schedule: []})

    useEffect(() => {
        async function FetchSchedule() {
            let response = await schedule.getFullSchedule()
            setRaceSchedule({schedule: response})
        }
        FetchSchedule()
    }, [])
    return raceSchedule;
}

export default useSchedule