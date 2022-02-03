import React, { useState, useContext, Fragment } from 'react';
import userContext from '../../../context/userContext'


function Register(props) {
    const [formdata, setFormdata] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    return (
        <form>
            <div>
                <h4>CREATE ACCOUNT</h4>
            </div>
            <label htmlFor={'username'}>Username</label>
            <input type='text' id='username' placeholder='username' value=''></input>
            <label htmlFor={'email'}>Email address</label>
            <input type='text' id='email' placeholder='email' value=''></input>
            <label htmlFor={'password'}>Password</label>
            <input type='password' id='password' placeholder='password' value=''></input>
            <label htmlFor={'confirm password'}>Confirm password</label>
            <input type='text' id='confirm password' placeholder='confirm password' value=''></input>
            <section>
                <p>Password must contain</p>
                <ul>
                    <li>Uppercase</li>
                    <li>Lowercase (at least 2)</li>
                    <li>8 or more characters</li>
                    <li>Number</li>
                </ul>
            </section>
            <button type='submit' onSubmit={(e) => {
                e.preventDefault()
                console.log('submit reg form')
            }}>Register</button>
        </form>
    )
}

export default Register