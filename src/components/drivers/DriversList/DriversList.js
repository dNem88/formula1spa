import React, {Fragment} from 'react'
import Driver from '../driver/Driver'

function DriversList({drivers}) {

    return (
        <Fragment>
            {!drivers ? null :
                drivers.map(x => {
                    return <Driver key={x._id} {...x}/>
                })
            }
        </Fragment>
    )
}

export default DriversList