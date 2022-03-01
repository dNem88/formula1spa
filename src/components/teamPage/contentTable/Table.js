import React from 'react'
import TableRow from '../tableRow/TableRow'
import styles from './table.module.css'
import stringSplit from '../../../utils/common/stringSplit'

function Table(props) {
    const blackList = ['_id', 'image', 'drivers', 'stats']
    const data = Object.entries(props).filter(x => !blackList.includes(x[0]))
    let stats = []
    if (props.stats) {
        stats = Object.entries(props.stats)
    }
    
    return (
        <table className={styles.table}>
            <tbody>
                {data.map(([k,v],i )=> {
                    let transformed = stringSplit(k)
                    return <TableRow key={`${i}${k}`} title={transformed} content={v}/>
            })}
                {!stats ? null : 
                    stats.map(([k,v],i ) => {
                    let transformed = stringSplit(k)
                    return <TableRow key={`${i}${k}`} title={transformed} content={v}/>
            })
                }
            </tbody>
        </table>
    )
}

export default Table