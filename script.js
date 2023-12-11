// const inp = document.getElementById('input')
const row = document.getElementById('row')
const API = `https://api.worldnewsapi.com/search-news?api-key=7ed6fd00b49849bfbc7ed1a456e371b0&text=business.`
fetch(API)
    .then(result => result.json())
    .then((data) => {
        console.log(data.news)
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
                <a href="${value.url}">Read More</a>
            </div>
            `
        })
    })


