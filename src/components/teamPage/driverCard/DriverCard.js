import React, {useEffect, useState} from 'react'
import styles from './driverCard.module.css'
import hDrivers from '../../../utils/api/heroku_api/hDrivers'
import ErrorComp from '../../common/errorComp/ErrorComp'


function DriverCard(props) {
    let familyName = props.image.split(' ')[1]
    const [state,setState] = useState({error: null, errorMessage: null, driver: null})

    useEffect(() => {
        async function FetchDriver() {
            try{
                const response = await hDrivers.getDriverByName(familyName)
                if (!response.ok) {
                    throw new Error('Failed to fetch!')
                }
                const json = await response.json()
                setState({error: null, errorMessage: null, driver: json})
            } catch(err) {
                setState({error: true, errorMessage: err.message, driver: null})
            }
        }
        FetchDriver()
    }, [])

   
    return (
        
        <div className={styles['main-container']}>
            <div className={styles['image-container']}>
                <img src={`https://rtiovelu.sirv.com/Images/formula1/drivers/${familyName.toLowerCase()}.jpg`} alt='driver-image' loading='lazy'/>
            </div>
            {state.error ? <ErrorComp errorMessage={state.errorMessage}/> : null}
            {!state.error ? (!state.driver ? 
            <div className={styles.content}>
                 
            </div>
                    : 
                    <div className={styles.content}>
                        <h1>{state.driver.permanentNumber}</h1>
                        <p className={styles['driver']}>{`${state.driver.givenName} ${state.driver.familyName}`}</p>
                        <p className={styles['team']}>{state.driver.team}</p>
                    </div>
            ) : null}
        </div>
    )
}

export default DriverCard