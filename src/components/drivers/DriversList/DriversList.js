import React, {Fragment} from 'react'
import Driver from '../driver/Driver'

function DriversList(props) {

    return (
        <Fragment>
            {!props.drivers ? null :
                props.drivers.map(x => {
                    return <Driver key={x._id} {...x}/>
                })
            }
        </Fragment>
    )
}

export default DriversList