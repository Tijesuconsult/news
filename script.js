// const API = 'https://api.worldnewsapi.com/search-news?api-key=9fcf6ad69db34367a30187f60b759df3'
// const API = 'https://newsdata.io/api/1/news?apikey=pub_34286f5b173f82b114e6939354fd98ff72dec&q=pegasus&language=en'
const API = 'http://api.mediastack.com/v1/news?access_key=994748ee3726c581791b88b695b99395'
let row = document.getElementById('row')
fetch(API)
    .then(result => result.json())
    .then((data) => {
        console.log(data.data)
        let column;
        data.data.map((value, index) => {
            column += `
        
            <div class="js-style">
                <img src="${value.image}" alt="" style="width:100%;height:180px">
                <strong>Author: ${value.author}</strong>
                <p><b>Title:</b> ${value.title}</p>
                <p><b>Date:</b> ${value.published_at}</p>
                <p><b>Country:</b> ${value.country}</p>
                <p><b>Discription:</b> ${value.discription}</p>
                <p><b>Source:</b> ${value.source}</p>
                <p><b>News:</b> ${value.category} </p>
                <a href="">Read More</a>
                <p><b>Url:</b> ${value.url.slice(0,25)}</p>

            </div>
            `
        })
        row.innerHTML = column
    })

