import React, {Fragment} from 'react'
import {Outlet, context} from 'react-router-dom'
import Spinner from '../../common/spinner/Spinner'
import styles from './videosContainer.module.css'
import VerticalSlider from '../verticalSlider/VerticalSlider'


function VideosContainer(props) {

    return (
        <div className={styles['main-container']}>
            {!props.videos ? <Spinner/> : 
            <Fragment>
                <Outlet context={props}/>
                <VerticalSlider {...props}/>
            </Fragment>}
        </div> 
    )
}


export default VideosContainer