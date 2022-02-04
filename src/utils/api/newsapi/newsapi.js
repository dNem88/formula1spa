
async function getNews(searchString) {
    let date = [new Date().getFullYear(), new Date().getMonth() +1, new Date().getDay()-2].join('-').trim();
    const apiKey = '42e2d1afbe1f4b948e561944ad001f29'
    let url = `https://newsapi.org/v2/everything?q='${encodeURI(searchString)}'&from=${date}&language=en&domains=espn.com,bbc-news.com,autosport.com,reuters.com`
    console.log(url)
    try {
        let response =  await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization':`${apiKey}`
            }
        })
        let data = await response.json()
        console.log(data)
    } catch(e) {
        return e.message || 'Something happened'
    }
}

export default getNews