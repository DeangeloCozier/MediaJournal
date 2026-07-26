const movies = [

    {
        title: "Kung Fu Panda",
        poster: "../assets/posters/kungfupanda.jpg",
        createdAt: "2026-07-01"
    },

    {
        title: "Cars",
        poster: "../assets/posters/cars.jpg",
        createdAt: "2026-07-02"
    }

];

function renderMovies() {

    const container = document.getElementById("container");

    // Clear the container
    container.innerHTML = "";

    // Newest first
    const newestMovies = [...movies]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);

    newestMovies.forEach(movie => {
        container.innerHTML += createMovieCard(movie);
    });

    container.innerHTML += createAddCard();
}

renderMovies();

function addMovie(movie) {

    movie.createdAt = new Date().toISOString();

    movies.push(movie);

    renderMovies();
}

function createMovieCard(movie){

    return `
        <div class="card">

            <img src="${movie.poster}" alt="${movie.title}">

            <p>${movie.title}</p>

        </div>
    `;

}

function createAddCard(){

    return `
        <div class="add-card">

            +

            <p>Add New Movie</p>

        </div>
    `;

}
