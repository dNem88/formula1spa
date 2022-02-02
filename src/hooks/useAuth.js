import userContext from '../context/userContext'
import React, {useContext, useState, useEffect} from 'react'
import {logoutUser, loginUser, verifyUser, registerUser} from '../utils/api/heroku_api/auth'
function useAuth() {
    const context = useContext(userContext)
    context.login = login;
    context.logout = logout;
    context.verify = verify;
    const [user, setUser] = useState(context)
    async function login() {
        setUser({...user, user:{username: 'Daniel', id: '123'}, isLogged: true})
    }
    async function register() {
        /*To do*/
    }
    async function logout() {
        try {
            let response = await logoutUser();
            if (response.logout === true && response.message) {
                return setUser({...user, user: null, isLogged: false})
            }
        } catch(e) {
            return e
        }
    }
    async function verify() {
        try {
            let response = await verifyUser();
            if (response.isAuthorized === true) {
                return setUser({...user, user: response.user, isLogged: true})
            } else if (response.isAuthorized === false) {
                return setUser({...user, user: null, isLogged: false})
            }
        } catch(e) {
            console.log(e)
            return setUser({...user, user: null, isLogged: false})
        }
    }
    console.log('render')
    return user;
}

export default useAuth