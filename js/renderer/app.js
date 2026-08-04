renderHomeCards(
    movies,
    "movie-container",
    createMovieCard,
    "Add New Movie"
);

renderHomeCards(
    shows,
    "show-container",
    createShowCard,
    "Add New Show"
);

renderHomeCards(
    games,
    "game-container",
    createGameCard,
    "Add New Game"
);

renderHomeCards(
    books,
    "book-container",
    createBookCard,
    "Add New Book"
);

renderHomeCards(
    songs,
    "song-container",
    createSongCard,
    "Add New Album/Single"
);

renderHomeCards(
    [...movies, ...shows, ...games, ...books, ...songs],
    "favorite-container",
    createFavoriteCard,
    "Add New Entity"
);