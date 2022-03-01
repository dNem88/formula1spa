import React from 'react'
import styles from './tableRow.module.css'

function TableRow({title, content}) {


    return (
        <tr className={styles.row}>
            <td className={styles.title}>{title}</td>
            <td className={styles.content}>{content}</td>
        </tr>
    )
}

export default TableRow