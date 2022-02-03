const heroku_api_url = 'https://boiling-brushlands-51072.herokuapp.com'

async function registerUser(formInput) {
    const response = await fetch(`${heroku_api_url}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formInput),
        credentials: 'include',
        
    })
    const data = await response.json()
    return data
}
async function loginUser(formInput) {
    const response = await fetch(`${heroku_api_url}/users/login`, {
        method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
        body: JSON.stringify(formInput),
        credentials: 'include'
    })
    const data = await response.json()
    return data
}
async function logoutUser() {
    const response = await fetch(`${heroku_api_url}/users/logout`, {
        method: 'POST',
        credentials: 'include'
    })
    const data = await response.json()
    return data
}
async function verifyUser() {
    const response = await fetch(`${heroku_api_url}/users/verify`, {
        method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
        credentials: 'include'
    })
    const data = await response.json()
    return data
}
export default {registerUser,loginUser,logoutUser, verifyUser}