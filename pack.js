const watchlistContainer = document.getElementById('watchlist-container')
const removeAllBtn = document.getElementById('remove-all')
const watchlistMovie = JSON.parse(localStorage.getItem('myWatchlist'))
watchlistMovie.map(watchlist => {
watchlistContainer.innerHTML += `
    <div class="movie-container">
        <img src="${watchlist.image}" alt="image">
        <div class="movie-details">
            <div class="title">
                <h3>${watchlist.title}</h3>
                <i class="star fa-solid fa-star"><span class="rated">${watchlist.rating}</span></i>
            </div>
            <div class="category">
                <p>${watchlist.time}</p>
                <p>${watchlist.genre}</p>
                <button id="remove-btn" class="add-btn"><span class="choice">-</span>Remove</button>
            </div>
            <div class="about">
                <p>${watchlist.plot}</p>
            </div>
        </div>
    </div>`

})
removeAllBtn.addEventListener("dblclick", event => {
    localStorage.clear()
})
