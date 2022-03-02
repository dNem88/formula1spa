
async function getNews(searchString) {
    let date = [new Date().getFullYear(), new Date().getMonth() +1, new Date().getDay()-3].join('-').trim();
    const apiKey = '42e2d1afbe1f4b948e561944ad001f29'
    let url = `https://newsapi.org/v2/everything?q='${encodeURI(searchString)}'&from=${date}&language=en&domains=espn.com,bbc-news.com,autosport.com,reuters.com&sortBy=relevancy&apiKey=${apiKey}`
    
    try {
        let response =  await fetch(url, {
            method: 'GET',
        })
        return response;
    } catch(err) {
        return err
    }
}

async function getMoreNews(searchString) {
    let date = [new Date().getFullYear(), new Date().getMonth() +1, new Date().getDay()-2].join('-').trim();
    let url = `https://newsapi.org/v2/everything?q='${encodeURI(searchString)}'&from=${date}&language=en&domains=espn.com,bbc-news.com,autosport.com,reuters.com&sortBy=publishedAt&page=2&apiKey=42e2d1afbe1f4b948e561944ad001f29`
    
    try {
        let response =  await fetch(url, {
            method: 'GET',
            
        })
        return response;
    } catch(err) {
        return err
    }   
}

export default {
    getNews,getMoreNews
}