

async function getDriversStandings() {
    try {
        let response = await fetch('https://boiling-brushlands-51072.herokuapp.com/standings/drivers', {
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        })
        return response;
    } catch(err) {
        return err
    }
}
async function getConstructorsStandings() {
    try {
        let response = await fetch('https://boiling-brushlands-51072.herokuapp.com/standings/constructors', {
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        })
        return response;
    } catch (err) {
        return err
    }
}

const standings = {
    getDriversStandings,
    getConstructorsStandings
}
export default standings