const heroku_api_url = 'https://calm-puce-kitten-fez.cyclic.app/'

async function getVideos(count=20) {
    try {
        let response = await fetch(`${heroku_api_url}/videos?count=${count}`, {
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

async function getVideoById(id) {
     try{
        let response = await fetch(`${heroku_api_url}/videos/${id}`, {
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

export default {getVideos, getVideoById}