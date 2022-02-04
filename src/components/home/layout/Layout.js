import React, {Fragment} from 'react'
import styles from './layout.module.css'


function Layout(props) {
    return (
        <Fragment>
            <section className={styles['trending']}>

            </section>
            <section className={styles['news']}>

            </section>
            <fieldset className={styles['editor-pick']}>
                <legend className={styles['editor-legend']}>EDITOR'S PICK</legend>
            </fieldset>
            <h2 className={styles['h-news']}>More news</h2>
            <section className={styles['more-news']}>

            </section>
            <section className={styles['schedule']}>

            </section>
            <section className={styles['standings']}>

            </section>
        </Fragment>
    )
}

export default Layout