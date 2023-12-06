const API = 'https://api.worldnewsapi.com/search-news?api-key=9fcf6ad69db34367a30187f60b759df3'
let row = document.getElementById('row')
fetch(API)
    .then(result => result.json())
    .then((data) => {
        console.log(data)
        let column;
        data.news.map((value, index) => {
            column += `
        
            <div style="width:25%; margin: 20px; ">
                <img src="${value.image[1]}" alt="" style="width:100%;height:200px">
                <p><b>Name:</b> ${value.title.slice(0,60)}</p>
                <p><b>Date:</b> ${value.publish_date}</p>
            <strong>Author: ${value.author}</strong>
                <p>News: ${value.text.slice(0,200)} <a href="">Read More</a>
</p>
            </div>
            `
        })
        row.innerHTML = column
    })

