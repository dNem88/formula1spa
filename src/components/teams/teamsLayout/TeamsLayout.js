import React, {useState, useEffect, Fragment} from 'react'
import styles from './teamsLayout.module.css'
import api from '../../../utils/api/heroku_api/hTeams'
import ErrorComp from '../../common/errorComp/ErrorComp'
import Spinner from '../../common/spinner/Spinner'
import CommonHeader from '../../common/titleHeader/CommonHeader'
import TeamsList from '../teamsList/TeamsList'

const headerProps = {
    header: 'F1 Teams 2022',
    description: "Discover everything you need to know about this year's Formula 1 teams - drivers, podium finishes, points earned and championship titles."
}

function TeamsLayout() {
    const [state, setState] = useState({error: null, errorMessage: null, teams: null})

    useEffect(() => {
        async function FetchTeams() {
            try {
                let response = await api.getTeams()
                if (!response.ok) {
                    throw new Error('Failed to fetch teams!')
                }
                let json = await response.json()
                setState({error: null, errorMessage: null, teams: json})
            } catch(err) {
                setState({error: true, errorMessage: err.message || 'undefined error', teams: null})
            }
        }
        FetchTeams()
    }, [])
    console.log(state)
    return (
        <Fragment>
            {state.error ? <ErrorComp errorMessage={state.errorMessage}/> : null}
            <section className={styles['main-container']}>
                <CommonHeader {...headerProps}/>
                {!state.error && !state.teams ? <Spinner/> :
                    <TeamsList {...state}/>
                }
            </section>
        
        </Fragment>
    )
}

export default TeamsLayout