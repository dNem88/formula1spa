function compareDates(schedule=[]) {
    let today = new Date().getTime()
    if (schedule.length > 0) {
      
        let raceObject = schedule.find(x => {
            let raceDate = new Date(x.date).getTime()
            return raceDate > today
        })
        return raceObject._id;
    }
    return []
}

export default compareDates;