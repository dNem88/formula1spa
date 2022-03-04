import React, { useState,  useContext } from 'react';
import userContext from '../../../context/userContext'
import {useNavigate} from 'react-router-dom'
import styles from './register.module.css'
import Input from '../../common/input/Input'
import Form from '../../common/form/Form'
import SubmitButton from '../../common/submitButton/SubmitButton'

function Register() {

    let context = useContext(userContext);
    const navigate = useNavigate()

    const [formdata, setFormdata] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            let response = await context.register(formdata)
            if (response.acknowledged && response.insertedId) {
                navigate('/auth/login')
            }
            if (response.error) {
                submitBtn.current.disabled = false;
                throw new Error(response.error.message)
            }
            if (response.message) {
                submitBtn.current.disabled = false;
                throw new Error(response.message)
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
        <Form submitHandler={submitHandler} heading={'CREATE ACCOUNT'}>
            <Input type={'text'} onChange={changeHandler} labelContent={'Username'} id={'username'} value={formdata.username}/>
            <Input type={'text'} onChange={changeHandler} labelContent={'Email address'} id={'email'} value={formdata.email}/>
            <Input type={'password'} onChange={changeHandler} labelContent={'Password'} id={'password'} value={formdata.password}/>
            <Input type={'password'} onChange={changeHandler} labelContent={'Confirm password'} id={'confirmPassword'} value={formdata.confirmPassword}/>
            <section>
                <p className={styles.error}>{formdata.errorMessage}</p>
                <p >Password must contain</p>
                <ul>
                    <li>Uppercase</li>
                    <li>Lowercase (at least 2)</li>
                    <li>8 or more characters</li>
                    <li>Number</li>
                </ul>
            </section>
            <SubmitButton text={'REGISTER'} ref={submitBtn}/>
        </Form>
    )
}

export default Register