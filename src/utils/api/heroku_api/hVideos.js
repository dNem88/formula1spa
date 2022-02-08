const heroku_api_url = 'https://boiling-brushlands-51072.herokuapp.com'

async function getVideos(count=10) {
    try{
        let response = await fetch(`${heroku_api_url}/videos?count=${count}`, {
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        })
        let videos = response.json()
        return videos
    } catch(e) {
        return {error: {message: 'Failed to fetch videos!'}}
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
        let video = response.json()
        return video
    } catch(e) {
        return {error: {message: 'Failed to fetch video!'}}
    }
}

export default {getVideos, getVideoById}