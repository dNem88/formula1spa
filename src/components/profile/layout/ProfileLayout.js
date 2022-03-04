import React, {useContext} from 'react'
import userContext from '../../../context/userContext'
import {useNavigate, Link} from 'react-router-dom'
import styles from './profileLayout.module.css'
import Input from '../../common/input/Input'
import Form from '../../common/form/Form'
import FormRedirect from '../../common/formRedirect/FormRedirect'

function ProfileLayout() {
    const context = useContext(userContext)
    const navigate = useNavigate()
    if (!context.isLogged) {
        navigate('/auth/login')
    }
    

    return (
        <section className={styles['main-container']}>
            <Form heading={'USER INFORMATION'}>
                <Input type={'text'}  labelContent={'Username'} id={'username'} value={context.user.username} readonly={true}/>
                <Input type={'text'}  labelContent={'Email address'} id={'email'} value={context.user.email} readonly={true}/>
                <FormRedirect label={"Back to homepage?"} linkText={"View our homepage"} href={'/'}/>
            </Form>
        </section>
    )
}

export default ProfileLayout