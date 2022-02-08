import React from 'react'
import styles from './flag.module.css'
function Flag(props) {
    // src={'../../../public/flags/props.flag.jpg'}
    return (
        <div className={styles['image-container']}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKW5JRzY7qbTUAsJFK4ij7DPA7SDW7slWnvlyc7aY&usqp=CAU'} alt={'flag'}/>
        </div>
    )
}

export default Flag