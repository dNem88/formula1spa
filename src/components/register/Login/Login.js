import React, { useState, useRef, useContext } from 'react';
import userContext from '../../../context/userContext'
import {useNavigate, Link} from 'react-router-dom'
import styles from './login.module.css'

function Login() {
    let context = useContext(userContext);
    const navigate = useNavigate()

    const [formdata, setFormdata] = useState({
        username: '',
        password: '',
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
            let response = await context.login(formdata)
            if (response.message) {
                throw new Error(response.message)
            } 
            if (response._id && response.authToken) {
                navigate('/')
            }
        } catch(err) {
            submitButton.current.disabled = false;
            setFormdata({
                ...formdata,
                errorMessage: err.message
            })
        }
    }
    
    return (
        <form onSubmit = {
            submitHandler
        } >
            <div>
                <h2>SIGN IN</h2>
            </div>
            <label htmlFor={'username'}>Username</label>
            <input type='text' id='username' placeholder='username' value={formdata.username} onChange={changeHandler}></input>
            <label htmlFor={'password'}>Password</label>
            <input type='password' id='password' placeholder='password' value={formdata.password} onChange={changeHandler}></input>
            <button type='submit' ref={submitButton}>SIGN IN</button>
            <p className={styles.error}>{formdata.errorMessage}</p>
            <div className={styles['link-container']}>
                <p>Dont't have an account yet?</p>
                <Link to={'/auth/register'}>Register with F1</Link>
            </div>
        </form>
    )
}

export default Login