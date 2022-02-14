const heroku_api_url = 'https://boiling-brushlands-51072.herokuapp.com'

async function registerUser(formInput) {
    try{
        const response = await fetch(`${heroku_api_url}/users/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formInput),
            credentials: 'include',

        })
        return response
    } catch(err) {
        return err
    }
    
}
async function loginUser(formInput) {
    try {
        const response = await fetch(`${heroku_api_url}/users/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formInput),
            credentials: 'include'
        })
        return response
    } catch(err) {
        return err
    }
    
}
async function logoutUser() {
    try {
        const response = await fetch(`${heroku_api_url}/users/logout`, {
            method: 'POST',
            credentials: 'include'
        })
        return response
    } catch(err) {
        return err
    }
    
}
async function verifyUser() {
    try {
        const response = await fetch(`${heroku_api_url}/users/verify`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        })
        return response
    } catch(err) {
        return err
    }
    
}
export default {registerUser,loginUser,logoutUser, verifyUser}