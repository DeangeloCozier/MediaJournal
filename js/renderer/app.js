renderCards(
    movies,
    "movie-container",
    createMovieCard,
    "Add New Movie"
);

renderCards(
    shows,
    "show-container",
    createShowCard,
    "Add New Show"
);

renderCards(
    games,
    "game-container",
    createGameCard,
    "Add New Game"
);

renderCards(
    books,
    "book-container",
    createBookCard,
    "Add New Book"
);

renderCards(
    songs,
    "song-container",
    createSongCard,
    "Add New Album/Single"
);

renderCards(
    [...movies, ...shows, ...games, ...books, ...songs],
    "favorite-container",
    createFavoriteCard,
    "Add New Entity"
);