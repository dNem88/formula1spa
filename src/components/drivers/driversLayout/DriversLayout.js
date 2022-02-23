import React, {useState, useEffect, Fragment} from 'react'
import styles from './driversLayout.module.css'
import api from '../../../utils/api/heroku_api/hDrivers'
import ErrorComp from '../../common/errorComp/ErrorComp'
import Spinner from '../../common/spinner/Spinner'
import CommonHeader from '../../common/titleHeader/CommonHeader'
import DriversList from '../DriversList/DriversList'

const headerProps = {
    header: 'F1 Drivers 2022',
    description: "Check out this season's official F1 line-up. Full breakdown of drivers, points and current positions. Follow your favourite F1 drivers on and off the track."
}

function DriversLayout() {
    const [state, setState] = useState({error: null, errorMessage: null, drivers: null})

    useEffect(() => {
        async function FetchDrivers() {
            try {
                let response = await api.getDrivers()
                if (!response.ok) {
                    throw new Error('Failed to fetch drivers!')
                }
                let json = await response.json()
                setState({error: null, errorMessage: null, drivers: json})
            } catch(err) {
                setState({error: true, errorMessage: err.message || 'undefined error', drivers: null})
            }
        }
        FetchDrivers()
    }, [])
    console.log(state)
    return (
        <Fragment>
            {state.error ? <ErrorComp errorMessage={state.errorMessage}/> : null}
            <section className={styles['main-container']}>
                <CommonHeader {...headerProps}/>
                {!state.error && !state.drivers ? <Spinner/> :
                    <DriversList {...state}/>
                }
            </section>
        
        </Fragment>
    )
}

export default DriversLayout