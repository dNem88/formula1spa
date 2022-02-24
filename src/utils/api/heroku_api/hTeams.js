async function getTeams() {
    try {
        const response = await fetch('https://boiling-brushlands-51072.herokuapp.com/teams', {
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        })
        return response
    } catch (err) {
        return err
    }
}

async function getTeamById(id) {
    try {
        const response = await fetch(`https://boiling-brushlands-51072.herokuapp.com/teams/${id}`, {
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        })
        return response
    } catch (err) {
        return err
    }
}

const api = {
    getTeamById,
    getTeams
}

export default api