import React, {useEffect, useState, Fragment} from 'react'
import styles from './driversStandings.module.css'
import hStandings from '../../../utils/api/heroku_api/hStandings'
import ErrorComp from '../../common/errorComp/ErrorComp'
import {Link} from 'react-router-dom'
import DriversPoints from '../../common/driverPoints/DriverPoints'
import Spinner from '../../common/spinner/Spinner'
function DriversStandings() {
    const [standings, setStandings] = useState({
        standings: null,
        hasError: null,
        errorMessage: null
    })
    useEffect(() => {
        async function FetchStandings() {
            try{
                let response = await hStandings.getDriversStandings()
                if (!response.ok) {
                    throw new Error('Bad request to Standings')
                }
                let json = await response.json()
                if (json.error) {
                    throw new Error(json.error.message)
                }
                setStandings({standings: json, hasError: null, errorMessage: null})
                console.log(json)
                return json
            }catch(err) {
                console.log(err)
                setStandings({standings: null, hasError: true, errorMessage: err.message})
                return err
            }
        }
        FetchStandings()
        
    }, [])
    console.log(standings)
    return (
        <Fragment>
             {(standings.hasError) ? <ErrorComp errorMessage={standings.errorMessage}/> : 
                <div className={styles['main-container']}>
                    < div className = {
                        styles['heading-container']
                    } >
                        <h2>DRIVERS STANDINGS</h2>
                    </div>
                    <div className={styles['standings-container']}>
                        {!standings.standings ? <Spinner/> : 
                            standings.standings.slice(0,10).map(x => {
                                return <DriversPoints {...x}/>
                            })
                        }
                    </div>
                    <Link to={'/standings'}>VIEW FULL STANDINGS</Link>
                </div>
             }
        </Fragment>
    )
}

export default DriversStandings