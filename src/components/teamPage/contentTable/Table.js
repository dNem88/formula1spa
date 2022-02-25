import React from 'react'
import TableRow from '../tableRow/TableRow'
import styles from './table.module.css'

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
                {data.map((x,i )=> {
                    console.log(x,i)
                return <TableRow key={`${i}${x[0]}`} title={x[0]} content={x[1]}/>
            })}
                {!stats ? null : 
                    stats.map((x,i )=> {
                return <TableRow key={`${i}${x[0]}`} title={x[0]} content={x[1]}/>
            })
                }
            </tbody>
        </table>
    )
}

export default Table