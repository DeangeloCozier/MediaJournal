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
        renderCollectionCards( movieState.displayedMovies, "movie-container", createMovieCard, "Add Movie", createAddCard);
    } else {
        renderCollectionCards( movieState.displayedMovies, "movie-container", createMovieSmallGridCard, "Add Movie", createAddSmallGridCard);
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

viewToggle( "viewToggle", onViewChanged );

applyFilters();

renderMovies();
