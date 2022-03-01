function stringSplit(string) {
    if (string) {
        let a = string.match(/^(?<small>[a-z]{1,})/g) || [];
        let b = string.match(/(?<capital>[A-Z]{1}[a-z]{1,})/g) || [];
        let result = [...a, ...b].map( x => x.toLowerCase()).join(' ')
        return result
    }
}

export default stringSplit