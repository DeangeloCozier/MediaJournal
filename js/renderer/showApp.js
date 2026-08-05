function renderShows(data = shows) {
    renderCollectionCards(data, "show-container", createShowCard, "Add Show");
}

renderShows();

SearchEntities("showSearch", shows, renderShows);