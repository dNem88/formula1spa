import React, {useEffect, useState, Fragment} from 'react'
import styles from './driversStandings.module.css'
import hStandings from '../../../utils/api/heroku_api/hStandings'
import ErrorComp from '../../common/errorComp/ErrorComp'
import {Link} from 'react-router-dom'
import DriversPoints from '../../common/driverPoints/DriverPoints'



function DriversStandings(props) {
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
                return json
            }catch(err) {
                setStandings({standings: null, hasError: true, errorMessage: err.message})
                return err
            }
        }
        FetchStandings()
        
    }, [])

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
                        {!standings.standings ? null : 
                            standings.standings.slice(0,props.count).map(x => {
                                return <DriversPoints key={x.driver} {...x}/>
                            })
                        }
                    </div>
                    {props.count > 20 ? null : <Link to={'/standings'}>VIEW FULL STANDINGS</Link>}
                </div>
             }
        </Fragment>
    )
}

export default DriversStandings