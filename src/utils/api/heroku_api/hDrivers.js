async function getDrivers() {
    try {
        const response = await fetch('https://boiling-brushlands-51072.herokuapp.com/drivers', {
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        })
        return response
    } catch(err) {
        return err
    }
}

async function getDriverById(id) {
    try {
        const response = await fetch(`https://boiling-brushlands-51072.herokuapp.com/drivers/${id}`, {
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
async function getDriverByName(name) {
    try {
        const response = await fetch(`https://boiling-brushlands-51072.herokuapp.com/drivers?name=${encodeURI(name)}`, {
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
    getDriverById, getDrivers, getDriverByName
}

export default api