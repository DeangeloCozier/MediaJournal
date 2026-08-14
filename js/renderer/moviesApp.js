// ---------------------
// State
// ---------------------

const movieState = {

    allMovies: [...movies],
    displayedMovies: [...movies],
    currentView: "grid",
    currentSort: "date",
    currentFilter: "all",
    searchText: ""

};


// ---------------------
// Rendering
// ---------------------

function renderMovies(){

    if (movieState.currentView === "grid") {
        renderCollectionCards( movieState.displayedMovies, "viewStyle", createMovieCard, "Add Movie", createAddCard);
    } else if (movieState.currentView === "smallGrid") {
        renderCollectionCards( movieState.displayedMovies, "viewStyle", createMovieSmallGridCard, "Add Movie", createAddSmallGridCard);
    } else if (movieState.currentView === "smallList") {
        renderCollectionCards( movieState.displayedMovies, "viewStyle", createMovieSmallListCard, "Add Movie", createAddSmallListCard);
    } else {
        renderCollectionCards( movieState.displayedMovies, "viewStyle", createMovieListCard, "Add Movie", createAddListCard);
    }

}

// ---------------------
// Filtering
// ---------------------

function applyFilters() {

    let results = [...movieState.allMovies];

    // Search

    if (movieState.searchText !== "") {

        results = results.filter(movie =>
            movie.title
                .toLowerCase()
                .includes(movieState.searchText)
        );

    }

    // Future filters go here

    /*
    if(movieState.currentFilter === "favorites"){

        results = results.filter(movie=>movie.favorite);

    }
    */

    // Future sorting goes here

    /*
    if(movieState.currentSort === "rating"){

        results.sort((a,b)=>b.rating-a.rating);

    }
    */

    movieState.displayedMovies = results;

}

// ---------------------
// Event Callbacks
// ---------------------

function onSearch(text) {

    movieState.searchText = text.toLowerCase();
    applyFilters();
    renderMovies();

}

function onViewChanged(view) {

    movieState.currentView = view;
    renderMovies();

}

// ---------------------
// Initialize Page
// ---------------------

searchEntities( "movieSearch", onSearch );

viewToggle( "viewToggle", onViewChanged, "viewStyle" );

applyFilters();

renderMovies();
