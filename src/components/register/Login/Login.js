import React, { useState,  useContext } from 'react';
import userContext from '../../../context/userContext'
import {useNavigate, Link} from 'react-router-dom'
import styles from './login.module.css'
import Input from '../../common/input/Input'
import Form from '../../common/form/Form'
import SubmitButton from '../../common/submitButton/SubmitButton';
import FormRedirect from '../../common/formRedirect/FormRedirect'

function Login() {
    let context = useContext(userContext);
    const navigate = useNavigate()

    const [formdata, setFormdata] = useState({
        username: '',
        password: '',
        errorMessage: ''
    })
    const submitBtn = React.createRef()

    function changeHandler(e) {
        setFormdata({
            ...formdata, [e.target.id]: e.target.value, errorMessage: ''
        })
    }
    async function submitHandler(e) {
        e.preventDefault();
        submitBtn.current.disabled = true;
        try {
            let response = await context.login(formdata)
            if (response.message) {
                throw new Error(response.message)
            } 
            if (response._id && response.authToken) {
                navigate('/')
            }
        } catch(err) {
            submitBtn.current.disabled = false;
            setFormdata({
                ...formdata,
                errorMessage: err.message
            })
        }
    }
    
    return (
        <Form submitHandler={submitHandler} heading={'SIGN IN'}>
            <Input type={'text'} onChange={changeHandler} labelContent={'Username'} id={'username'} value={formdata.username}/>
            <Input type={'password'} onChange={changeHandler} labelContent={'Password'} id={'password'} value={formdata.password}/>
            <SubmitButton text={'SIGN IN'} ref={submitBtn}/>
            <p className={styles.error}>{formdata.errorMessage}</p>
            <FormRedirect linkText={'Register with F1'} label={"Dont't have an account yet?"} href={'/auth/register'}/>
        </Form>
    )
}

export default Login