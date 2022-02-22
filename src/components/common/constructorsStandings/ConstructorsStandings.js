import React, {useEffect, useState, Fragment} from 'react'
import styles from './constructorsStandings.module.css'
import hStandings from '../../../utils/api/heroku_api/hStandings'
import ErrorComp from '../errorComp/ErrorComp'
import ConstructorsPoints from '../constructorsPoints/ConstructorsPoints'
import Spinner from '../spinner/Spinner'


function ConstructorsStandings() {
    const [standings, setStandings] = useState({
        standings: null,
        hasError: null,
        errorMessage: null
    })
    useEffect(() => {
        async function FetchStandings() {
            try{
                let response = await hStandings.getConstructorsStandings()
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
                        <h2>CONSTRUCTORS STANDINGS</h2>
                    </div>
                    <div className={styles['standings-container']}>
                        {!standings.standings ? <Spinner/> : 
                            standings.standings.map(x => {
                                return <ConstructorsPoints key={x.constructor} {...x}/>
                            })
                        }
                    </div>
                </div>
             }
        </Fragment>
    )
}

export default ConstructorsStandings