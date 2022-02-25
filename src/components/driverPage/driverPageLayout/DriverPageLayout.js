import React, {useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import hDrivers from '../../../utils/api/heroku_api/hDrivers'
import ErrorComp from '../../common/errorComp/ErrorComp'
import Spinner from '../../common/spinner/Spinner'
import NameHeader from '../../common/nameHeader/NameHeader'
import styles from './driversPageLayout.module.css'
import Table from '../../teamPage/contentTable/Table'
import Header from '../../teamPage/header/Header'
import DriverCard from '../../teamPage/driverCard/DriverCard'

function DriverPageLayout() {
    const [state, setState] = useState({error: null, errorMessage: null, driver: null})
    const {id} = useParams()

    useEffect(() => {
        async function FetchDriver() {
            try {
                const response = await hDrivers.getDriverById(id);
                if (!response.ok) {
                    throw new Error('Failed to fetch driver!')
                }
                const json = await response.json()
                setState({error: null, errorMessage: null, driver: json})
            } catch(err) {
                setState({error: true, errorMessage: err.message, driver: null})
            }
        }
        FetchDriver()
    }, [])
    console.log(state)
    return (
        <Fragment>
            {state.error ? <ErrorComp errorMessage={state.errorMessage}/> : null}
            {state.error ? null : 
                (!state.driver) ? <Spinner/> : 
                <Fragment>
                    <NameHeader name={`${state.driver.givenName} ${state.driver.familyName}`}/>
                    <section className={styles['main-container']}> 
                        <div className={styles['content-container']}>
                            <Header name={`${state.driver.givenName} ${state.driver.familyName}`} flag={state.driver.country.toLowerCase()}/>
                            <Table {...state.driver}/>
                        </div>
                        <div className={styles['drivers-container']}>
                            <DriverCard image={`${state.driver.givenName} ${state.driver.familyName}`}/>
                        </div>
                    </section>
                </Fragment>
            }
        </Fragment>
    )
}

export default DriverPageLayout