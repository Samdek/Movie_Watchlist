const searchEl = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const movieContainer = document.getElementById('movie-container')
const myWatchlistArray = []

async function getMovie() {
    const searchValue = searchEl.value 
    let res = await fetch(`http://www.omdbapi.com/?t=${searchValue}&apikey=9ad98305`)
    let data = await res.json()
    return data
}

function getMovieHtml() {
    getMovie()
        .then(data => {
            movieContainer.innerHTML += `
                <div class="movie-container">
                    <img src="${data.Poster}" alt="image">
                    <div class="movie-details">
                        <div class="title">
                            <h3>${data.Title}</h3>
                            <i class="star fa-solid fa-star"><span class="rated">${data.imdbRating}</span></i>
                        </div>
                        <div class="category">
                            <p>${data.Runtime}</p>
                            <p>${data.Genre}</p>
                            <button id="add-btn" class="add-btn"><span class="choice">+</span>Watclist</button>
                        </div>
                        <div  class="about">
                            <p>${data.Plot}</p>
                        </div>
                    </div>
                </div>`

            const addBtn = Array.from(document.getElementsByClassName("add-btn"))
            addBtn.map(add => {
                add.addEventListener('click', event => {
                        myWatchlistArray.push({
                                title: data.Title,
                                image: data.Poster,
                                time: data.Runtime,
                                genre: data.Genre,
                                plot: data.Plot,
                                rating: data.imdbRating
                            })
                            localStorage.setItem("myWatchlist", JSON.stringify(myWatchlistArray))
                    })
                })
            })
}


searchBtn.addEventListener("click", event => {
    getMovieHtml()
    event.preventDefault()
})

