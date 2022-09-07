async function getDrivers() {
    try {
        const response = await fetch('https://calm-puce-kitten-fez.cyclic.app//drivers', {
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
        const response = await fetch(`https://calm-puce-kitten-fez.cyclic.app//drivers/${id}`, {
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
        const response = await fetch(`https://calm-puce-kitten-fez.cyclic.app//drivers?name=${encodeURI(name)}`, {
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