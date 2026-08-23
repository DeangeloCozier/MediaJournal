const favoriteMedia = [
    ...movies.map(item => ({ ...item, mediaType: "movie" })),
    ...shows.map(item => ({ ...item, mediaType: "show" })),
    ...games.map(item => ({ ...item, mediaType: "game" })),
    ...books.map(item => ({ ...item, mediaType: "book" })),
    ...songs.map(item => ({ ...item, mediaType: "song" }))
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