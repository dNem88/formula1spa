import React, {Fragment} from 'react'
import {Outlet} from 'react-router-dom'
import styles from './videosContainer.module.css'
import VerticalSlider from '../verticalSlider/VerticalSlider'


function VideosContainer(props) {

    return (
        <div className={styles['main-container']}>
            {!props.videos ? null : 
            <Fragment>
                <Outlet context={props}/>
                <VerticalSlider {...props}/>
            </Fragment>}
        </div> 
    )
}


export default VideosContainer