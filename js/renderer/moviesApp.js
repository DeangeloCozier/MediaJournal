function renderMovies(data = movies){
    renderCollectionCards(data, "movie-container", createMovieCard, "Add Movie");
}

renderMovies();

SearchEntities("movieSearch", movies, renderMovies);