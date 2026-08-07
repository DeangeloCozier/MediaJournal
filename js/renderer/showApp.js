// ---------------------
// State
// ---------------------

const showState = {

    allShows: [...shows],
    displayedShows: [...shows],
    currentView: "grid",
    currentSort: "date",
    currentFilter: "all",
    searchText: ""

};

// ---------------------
// Rendering
// ---------------------

function renderShows(){

    if (showState.currentView === "grid") {
        renderCollectionCards( showState.displayedShows, "show-container", createShowCard, "Add Show", createAddCard);
    } else {
        renderCollectionCards( showState.displayedShows, "show-container", createShowSmallGridCard, "Add Show", createAddSmallGridCard);
    }

}

// ---------------------
// Filtering
// ---------------------

function applyFilters() {

    let results = [...showState.allShows];

    // Search
    if (showState.searchText !== "") {

        results = results.filter(show =>
            show.title.toLowerCase().includes(showState.searchText)
        );
    }

    showState.displayedShows = results;

}

// ---------------------
// Event Callbacks
// ---------------------

function onSearch(text) {

    showState.searchText = text.toLowerCase();
    applyFilters();
    renderShows();

}

function onViewChanged(view) {

    showState.currentView = view;
    renderShows();

}

// ---------------------
// Initialize Page
// ---------------------

searchEntities( "showSearch", onSearch );

viewToggle( "viewToggle", onViewChanged );

applyFilters();

renderShows();