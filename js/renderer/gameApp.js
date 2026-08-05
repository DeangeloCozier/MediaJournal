function renderGames(data = games) {
    renderCollectionCards(data, "game-container", createGameCard, "Add Game");
}

renderGames();

SearchEntities("gameSearch", games, renderGames);