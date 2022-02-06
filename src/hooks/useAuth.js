import userContext from '../context/userContext'
import {useContext, useState} from 'react'
import auth from '../utils/api/heroku_api/auth'
function useAuth() {
    const context = useContext(userContext)
    context.login = login;
    context.logout = logout;
    context.verify = verify;
    context.register = register;
    const [user, setUser] = useState(context)
    
    async function register(formdata) {
        try {
            let response = await auth.registerUser(formdata);
            if (response.error) {
                return response
            } else if (response.acknowledged && response.insertedId) {
                return response
            }
        } catch (e) {
            return {error: {message: 'Server error'}}
        }
    }
    async function login(formdata) {
        try {
            let response = await auth.loginUser(formdata);
            if (response.error) {
                return response
            } else if (response._id && response.username) {
                setUser({...user, user: response, isLogged: true})
                return response
            }
        } catch (e) {
            return {error: {message: 'Server error'}}
        }
    }
    async function logout() {
        try {
            let response = await auth.logoutUser();
            if (response.logout === true && response.message) {
                return setUser({...user, user: null, isLogged: false})
            }
        } catch(e) {
            return e
        }
    }
    async function verify() {
        try {
            let response = await auth.verifyUser();
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
    console.log('render from useAuth')
    return user;
}

export default useAuth