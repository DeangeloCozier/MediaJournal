// ---------------------
// State
// ---------------------

const musicState = {

    allMusic: [...songs],
    displayedMusic: [...songs],
    currentView: "grid",
    currentSort: "date",
    currentFilter: "all",
    searchText: ""

};


// ---------------------
// Rendering
// ---------------------

function renderMusic(){

    if (musicState.currentView === "grid") {
        renderCollectionCards( musicState.displayedMusic, "viewStyle", createSongCard, "Add Music", createAddCard);
    } else if (musicState.currentView === "smallGrid") {
        renderCollectionCards( musicState.displayedMusic, "viewStyle", createMusicSmallGridCard, "Add Music", createAddSmallGridCard);
    } else if (musicState.currentView === "smallList") {
        renderCollectionCards( musicState.displayedMusic, "viewStyle", createMusicSmallListCard, "Add Music", createAddSmallListCard);
    } else  if (musicState.currentView === "list"){
        renderCollectionCards( musicState.displayedMusic, "viewStyle", createMusicListCard, "Add Music", createAddListCard);
    }
    else {
        renderCollectionCards( musicState.displayedMusic, "viewStyle", createMusicCompactGridCard, "Add Music", createAddCompactGridCard);
    }

}

// ---------------------
// Filtering
// ---------------------

function applyFilters() {

    let results = [...musicState.allMusic];

    // Search

    if (musicState.searchText !== "") {

        results = results.filter(Music =>
            Music.title
                .toLowerCase()
                .includes(musicState.searchText)
        );

    }

    musicState.displayedMusic = results;

}

// ---------------------
// Event Callbacks
// ---------------------

function onSearch(text) {

    musicState.searchText = text.toLowerCase();
    applyFilters();
    renderMusic();

}

function onViewChanged(view) {

    musicState.currentView = view;
    renderMusic();

}

// ---------------------
// Initialize Page
// ---------------------

searchEntities( "musicSearch", onSearch );

viewToggle( "viewToggle", onViewChanged, "viewStyle" );

applyFilters();

renderMusic();