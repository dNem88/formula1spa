function transformSchedule(props) {
    let transformed = {}
    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    
    if (props !== null & props !== undefined) {
        let raceDate = props.date.split('-');
        let raceStart = [raceDate[0], Number(raceDate[1])-1, Number(raceDate[2]), ...props.time.split(':').slice(0,2)]
        let UTCinMs = Date.UTC(...raceStart) /*in UTC Time*/
        transformed.raceStartUTC = UTCinMs
        let date1 = new Date(props.date);
        date1.setDate(date1.getDate() - 2)
        let weekendStart = `${date1.getDate()} ${months[date1.getMonth()].substring(0,3).toUpperCase()} ${date1.getFullYear()}`
        transformed.country = props.Circuit.Location.country.toUpperCase()
        let date = props.date.split('-');
        transformed.date = props.date;
        transformed.month = months[Number(date[1])-1].substring(0,3).toUpperCase();
        transformed.day = Number(date[2])
        transformed.imageBase = props.Circuit.Location.country.toLowerCase().split(' ').join('_')
        transformed.raceName = props.raceName;
        transformed.season = Number(props.season);
        transformed.weekend = `${weekendStart} - ${transformed.day} ${transformed.month} ${props.season}`;
        return transformed
    } else {
        return props
    }
}   

export default transformSchedule