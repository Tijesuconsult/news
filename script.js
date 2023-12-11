const API = 'https://api.worldnewsapi.com/search-news?api-key=166fade0b0ff4c2d8408191b910b5ae2&text=sport.'
// const API = 'https://newsdata.io/api/1/news?apikey=pub_34286f5b173f82b114e6939354fd98ff72dec&q=pegasus&language=en'
// const API = 'http://api.mediastack.com/v1/news?access_key=e563d086f193f8da448cd2200b99ab26'
let row = document.getElementById('row')
fetch(API)
    .then(result => result.json())
    .then((data) => {
        // console.log(data.news)
        data.news.map((value, index) => {
            row.innerHTML += `
        
            <div class="js-style">
                <img src="${value.image}" alt="" style="width:100%;height:200px">
                <strong>Author: ${value.author}</strong>
                <p><b>Title:</b> ${value.title}</p>
                <p><b>Date:</b> ${value.publish_date}</p>
                <p><b>Country:</b> ${value.source_country}</p>
                <p><b>Id:</b> ${value.id}</p>
                <p><b>Sentiment:</b> ${value.sentiment}</p>
                <p><b>News:</b> ${value.text.slice(0,50)} </p>
                <a href="">Read More</a>
            </div>
            `
        })
    })


