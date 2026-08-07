// ---------------------
// State
// ---------------------

const gameState = {

    allGames: [...games],
    displayedGames: [...games],
    currentView: "grid",
    currentSort: "date",
    currentFilter: "all",
    searchText: ""

};


// ---------------------
// Rendering
// ---------------------

function renderGames(){

    if (gameState.currentView === "grid") {
        renderCollectionCards( gameState.displayedMovies, "game-container", createGameCard, "Add Game", createAddCard);
    } else {
        renderCollectionCards( gameState.displayedMovies, "game-container", createGameSmallGridCard, "Add Game", createAddSmallGridCard);
    }

}

// ---------------------
// Filtering
// ---------------------

function applyFilters() {

    let results = [...gameState.allGames];

    // Search

    if (gameState.searchText !== "") {

        results = results.filter(Game =>
            Game.title
                .toLowerCase()
                .includes(gameState.searchText)
        );

    }

    gameState.displayedMovies = results;

}

// ---------------------
// Event Callbacks
// ---------------------

function onSearch(text) {

    gameState.searchText = text.toLowerCase();
    applyFilters();
    renderGames();

}

function onViewChanged(view) {

    gameState.currentView = view;
    renderGames();

}

// ---------------------
// Initialize Page
// ---------------------

searchEntities( "gameSearch", onSearch );

viewToggle( "viewToggle", onViewChanged );

applyFilters();

renderGames();
