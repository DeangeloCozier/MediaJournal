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
        renderCollectionCards( musicState.displayedMusic, "song-container", createSongCard, "Add Music", createAddCard);
    } else {
        renderCollectionCards( musicState.displayedMusic, "song-container", createMusicSmallGridCard, "Add Music", createAddSmallGridCard);
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

viewToggle( "viewToggle", onViewChanged );

applyFilters();

renderMusic();