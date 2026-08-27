const favoriteMedia = [
    ...movies.map(item => ({ ...item, type: "movies" })),
    ...shows.map(item => ({ ...item, type: "shows" })),
    ...games.map(item => ({ ...item, type: "games" })),
    ...books.map(item => ({ ...item, type: "books" })),
    ...songs.map(item => ({ ...item, type: "songs" }))
];

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
    favoriteMedia,
    "favorite-container",
    createFavoriteCard,
    "Add New Entity"
);