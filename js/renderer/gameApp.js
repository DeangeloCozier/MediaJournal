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
        renderCollectionCards( gameState.displayedGames, "viewStyle", createGameCard, "Add Game", createAddCard);
    } else if (gameState.currentView === "smallGrid") {
        renderCollectionCards( gameState.displayedGames, "viewStyle", createGameSmallGridCard, "Add Game", createAddSmallGridCard);
    } else if (gameState.currentView === "smallList") {
        renderCollectionCards( gameState.displayedGames, "viewStyle", createGameSmallListCard, "Add Game", createAddSmallListCard);
    } else  if (gameState.currentView === "list"){
        renderCollectionCards( gameState.displayedGames, "viewStyle", createGameListCard, "Add Game", createAddListCard);
    }
    else {
        renderCollectionCards( gameState.displayedGames, "viewStyle", createGameCompactGridCard, "Add Game", createAddCompactGridCard);
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

    gameState.displayedGames = results;

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

viewToggle( "viewToggle", onViewChanged, "viewStyle" );

applyFilters();

renderGames();
