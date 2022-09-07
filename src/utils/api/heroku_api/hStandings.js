

async function getDriversStandings() {
    try {
        let response = await fetch('https://calm-puce-kitten-fez.cyclic.app//standings/drivers', {
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
        let response = await fetch('https://calm-puce-kitten-fez.cyclic.app//standings/constructors', {
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