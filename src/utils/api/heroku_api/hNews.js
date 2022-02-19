const heroku_api_url = 'https://boiling-brushlands-51072.herokuapp.com'

async function getHerokuNews() {
    try{
        const response = await fetch(`${heroku_api_url}/news`, {
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
async function updateHerokuNews(articles) {
    try {
        const response = await fetch(`${heroku_api_url}/news`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(articles)
        })
        let data = await response.json()
        return data
    } catch (e) {
        return {
            error: {
                message: 'Failed to update news!'
            }
        }
    }
}


export default {
    updateHerokuNews,
    getHerokuNews
}