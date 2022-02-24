import React, {Fragment} from 'react'
import Spinner from '../../common/spinner/Spinner'
import Team from '../team/Team'

function TeamsList(props) {

    return (
        <Fragment>
            {!props.teams ? <Spinner/> :
            props.teams.map(x => {
                return <Team key={x._id} {...x}/>
            })
            }
        </Fragment>
    )
}   

export default TeamsList