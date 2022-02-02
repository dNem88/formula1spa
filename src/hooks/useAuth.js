import userContext from '../context/userContext'
import React, {useContext, useState, useEffect} from 'react'

function useAuth() {
    const context = useContext(userContext)
    context.login = login;
    context.logout = logout;
    context.verify = verify;
    // console.log('from useAuth')
    const [user, setUser] = useState(context)
    function login() {
        setUser({...user, user:{username: 'Daniel', id: '123'}, isLogged: true})
    }
    function logout() {
        setUser({...user, user: null, isLogged: false})
    }
    function verify() {
        setTimeout(() => {
            setUser({...user, user: null, isLogged: false})
        }, 2000);
    }
    console.log('render')
    return user;
}

export default useAuth