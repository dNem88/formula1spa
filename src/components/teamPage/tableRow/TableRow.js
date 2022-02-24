import React from 'react'
import styles from './tableRow.module.css'

function TableRow(props) {


    return (
        <tr className={styles.row}>
            <td className={styles.title}>{props.title}</td>
            <td className={styles.content}>{props.content}</td>
        </tr>
    )
}

export default TableRow