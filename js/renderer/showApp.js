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
        renderCollectionCards( showState.displayedShows, "viewStyle", createShowCard, "Add Show", createAddCard);
    } else if (showState.currentView === "smallGrid") {
        renderCollectionCards( showState.displayedShows, "viewStyle", createShowSmallGridCard, "Add Show", createAddSmallGridCard);
    } else if (showState.currentView === "smallList") {
        renderCollectionCards( showState.displayedShows, "viewStyle", createShowSmallListCard, "Add Show", createAddSmallListCard);
    } else  if (showState.currentView === "list"){
        renderCollectionCards( showState.displayedShows, "viewStyle", createShowListCard, "Add Show", createAddListCard);
    }
    else {
        renderCollectionCards( showState.displayedShows, "viewStyle", createShowCompactGridCard, "Add Show", createAddCompactGridCard);
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

viewToggle( "viewToggle", onViewChanged,  "viewStyle" );

applyFilters();

renderShows();