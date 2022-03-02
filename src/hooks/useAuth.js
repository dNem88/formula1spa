import userContext from '../context/userContext'
import {useContext, useState} from 'react'
import auth from '../utils/api/heroku_api/auth'


function useAuth() {
   
    const context = useContext(userContext)
    const [user, setUser] = useState({...context,
            login: login,
            logout: logout,
            verify: verify,
            register: register,
        })

    async function register(formdata) {
        try {
            let response = await auth.registerUser(formdata);
            if (response.hasOwnProperty('message') && !response.ok) {
                throw new Error(response.message)
            }
            let json = await response.json()
            if (!response.ok) {
                throw new Error(json.error.message || response.message)
            } 
            return json
        } catch (err) {
            return err
        }
    }
    async function login(formdata) {
        try {
            let response = await auth.loginUser(formdata);
            if (response.error) {
                throw new Error(response.error.message)
            } 
            let json = await response.json()
            if (!response.ok) {
                throw new Error(json.error.message || response.message)
            }
            if (json._id && json.username) {
                setUser({...user, user: json, isLogged: true})
                return json
            }
        } catch (err) {
            return err
        }
    }
    async function logout() {
        try {
            let response = await auth.logoutUser();
            if (!response.ok) {
                throw new Error('Server error!')
            }
            if (response.logout === true && response.message) {
                setUser({...user, user: null, isLogged: false})
            }
        } catch(err) {
            return err
        }
    }
    async function verify() {
        try {
            let response = await auth.verifyUser();
            if (!response.ok) {
                throw new Error('Failed to verify!')
            }
            let json = await response.json()
            if (json.isAuthorized === false) {
                setUser({...user, user: null, isLogged: false})
            }
            if (json.isAuthorized === true) {
                setUser({...user, user: json.user, isLogged: true})
            }
        } catch(err) {
            setUser({...user, user: null, isLogged: false})
        }
    }
    return user;
}

export default useAuth