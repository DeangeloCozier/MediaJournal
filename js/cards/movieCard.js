function createMovieCard(movie) {

    return `<div class="card">
                <img src="${movie.poster}" alt="${movie.title}">
                <p>${movie.title}</p>
            </div>`;

}