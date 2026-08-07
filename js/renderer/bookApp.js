// ---------------------
// State
// ---------------------

const bookState = {

    allBooks: [...books],
    displayedBooks: [...books],
    currentView: "grid",
    currentSort: "date",
    currentFilter: "all",
    searchText: ""

};


// ---------------------
// Rendering
// ---------------------

function renderBooks(){

    if (bookState.currentView === "grid") {
        renderCollectionCards( bookState.displayedBooks, "book-container", createBookCard, "Add book", createAddCard);
    } else {
        renderCollectionCards( bookState.displayedBooks, "book-container", createBookSmallGridCard, "Add book", createAddSmallGridCard);
    }

}

// ---------------------
// Filtering
// ---------------------

function applyFilters() {

    let results = [...bookState.allBooks];

    // Search

    if (bookState.searchText !== "") {

        results = results.filter(book =>
            book.title
                .toLowerCase()
                .includes(bookState.searchText)
        );

    }

    bookState.displayedBooks = results;

}

// ---------------------
// Event Callbacks
// ---------------------

function onSearch(text) {

    bookState.searchText = text.toLowerCase();
    applyFilters();
    renderBooks();

}

function onViewChanged(view) {

    bookState.currentView = view;
    renderBooks();

}

// ---------------------
// Initialize Page
// ---------------------

searchEntities( "bookSearch", onSearch );

viewToggle( "viewToggle", onViewChanged );

applyFilters();

renderBooks();