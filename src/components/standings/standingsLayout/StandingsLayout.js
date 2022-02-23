import React from 'react'
import styles from './standingsLayout.module.css'
import {Outlet} from 'react-router-dom'
import CommonHeader from '../../common/titleHeader/CommonHeader'
import SelectForm from '../../register/Select/SelectForm'
const headerProps = {
    header: 'F1 Standings 2022',
    description: 'Live standings for the current F1 Season'
}

function StandingsLayout() {

    return (
        <section className={styles['wrapper']}>
            <CommonHeader {...headerProps}/>
            <SelectForm location={'standings'}/>
            <div className={styles['outlet-container']}>
                <Outlet/>
            </div>
        </section>
    )
}

export default StandingsLayout