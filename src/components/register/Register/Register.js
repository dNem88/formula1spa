import React, { useState, useRef, useContext, Fragment } from 'react';
import userContext from '../../../context/userContext'
import {useNavigate} from 'react-router-dom'
import styles from './register.module.css'

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
    const submitButton = useRef()
    function changeHandler(e) {
        setFormdata({
            ...formdata, [e.target.id]: e.target.value, errorMessage: ''
        })
    }
    async function submitHandler(e) {
        e.preventDefault();
        submitButton.current.disabled = true;
        try {
            let response = await context.register(formdata)
            console.log(response)
        if (response.error) {
            setFormdata({...formdata, errorMessage: response.error.message})
            submitButton.current.disabled = false;
        } 
        if (response.acknowledged && response.insertedId) {
            navigate('/auth/login')
        }
        } catch(e) {
            setFormdata({
                ...formdata,
                errorMessage: 'Unexpected ServerError'
            })
        }
    }
    return (
        <form onSubmit = {
            submitHandler
        } >
            <div>
                <h2>CREATE ACCOUNT</h2>
            </div>
            <label htmlFor={'username'}>Username</label>
            <input type='text' id='username' placeholder='username' value={formdata.username} onChange={changeHandler}></input>
            <label htmlFor={'email'}>Email address</label>
            <input type='text' id='email' placeholder='email' value={formdata.email} onChange={changeHandler}></input>
            <label htmlFor={'password'}>Password</label>
            <input type='password' id='password' placeholder='password' value={formdata.password} onChange={changeHandler}></input>
            <label htmlFor={'confirmPassword'}>Confirm password</label>
            <input type='password' id='confirmPassword' placeholder='confirm password' value={formdata.confirmPassword} onChange={changeHandler}></input>
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
            <button className={styles.button} type='submit' ref={submitButton}>REGISTER</button>
        </form>
    )
}

export default Register