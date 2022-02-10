function transformSchedule(props) {
    let transformed = {}
    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    if (props !== null & props !== undefined) {
        transformed.country = props.Circuit.Location.country.toUpperCase()
        let date = props.date.split('-');
        transformed.date = props.date;
        transformed.month = months[Number(date[1])-1].substring(0,3).toUpperCase();
        transformed.day = Number(date[2])
        transformed.imageBase = props.Circuit.Location.country.toLowerCase().split(' ').join('_')
        return transformed
    } else {
        return props
    }
}   

export default transformSchedule