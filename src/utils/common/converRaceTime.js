
function convertRaceTime(timeInMilliseconds) {
    
      if (timeInMilliseconds !== null) {
          let utcHours = new Date(timeInMilliseconds).getUTCHours()
          let localHours = new Date(timeInMilliseconds).getHours()
          let utcMinutes = new Date(timeInMilliseconds).getUTCMinutes()
          let localMinutes = new Date(timeInMilliseconds).getMinutes()
          utcHours = (utcHours < 10 ? `0${utcHours}` : utcHours)
          localHours = (localHours < 10 ? `0${localHours}` : localHours)
          utcMinutes = (utcMinutes < 10 ? `0${utcMinutes}` : utcMinutes)
          localMinutes = (localMinutes < 10 ? `0${localMinutes}` : localMinutes)
           let utcStart = `${utcHours}:${utcMinutes}`
           let localStart = `${localHours}:${localMinutes}`
          return [utcStart, localStart]
      } else {
          return ['','']
      }
}

export default convertRaceTime