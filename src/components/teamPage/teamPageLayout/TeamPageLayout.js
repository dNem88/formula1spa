import React, {useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import hTeams from '../../../utils/api/heroku_api/hTeams'
import ErrorComp from '../../common/errorComp/ErrorComp'
import Spinner from '../../common/spinner/Spinner'
import NameHeader from '../../common/nameHeader/NameHeader'
import styles from './teamPageLayout.module.css'
import Table from '../contentTable/Table'
import Header from '../header/Header'
import DriverCard from '../driverCard/DriverCard'

function TeamPageLayout() {
    const [state, setState] = useState({error: null, errorMessage: null, team: null})
    const {id} = useParams()

    useEffect(() => {
        async function FetchTeam() {
            try {
                const response = await hTeams.getTeamById(id);
                if (!response.ok) {
                    throw new Error('Failed to fetch team!')
                }
                const json = await response.json()
                setState({error: null, errorMessage: null, team: json})
            } catch(err) {
                setState({error: true, errorMessage: err.message, team: null})
            }
        }
        FetchTeam()
    }, [])

    return (
        <Fragment>
            {state.error ? <ErrorComp errorMessage={state.errorMessage}/> : null}
            {state.error ? null : 
                (!state.team) ? <Spinner/> : 
                <Fragment>
                    <NameHeader name={state.team.name}/>
                    <section className={styles['main-container']}> 
                        <div className={styles['content-container']}>
                            <Header name={state.team.name} image={state.team.image}/>
                            <Table {...state.team}/>
                        </div>
                        <div className={styles['drivers-container']}>
                            <DriverCard image={state.team.drivers[0]}/>
                            <DriverCard image={state.team.drivers[1]}/>
                        </div>
                    </section>
                </Fragment>
            }
        </Fragment>
    )
}

export default TeamPageLayout