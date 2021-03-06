const heroku_api_url = 'https://boiling-brushlands-51072.herokuapp.com'

async function getFullSchedule() {
    try{
        const response = await fetch(`${heroku_api_url}/schedule`, {
            headers: {
                'Content-type':'application/json'
            },
            credentials: 'include'
        })
        
        return response
    } catch(err) {
        return err
    }
}
async function getScheduleById(id) {
    try {
        const response = await fetch(`${heroku_api_url}/schedule/${id}`, {
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
        })
        let data = await response.json()
        return data
    } catch (e) {
        return {
            error: {
                message: 'Failed to get current race schedule!'
            }
        }
    }
}

export default {
   getFullSchedule,
   getScheduleById
}