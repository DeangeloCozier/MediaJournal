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
        renderCollectionCards( bookState.displayedBooks, "viewStyle", createBookCard, "Add Book", createAddCard);
    } else if (bookState.currentView === "smallGrid") {
        renderCollectionCards( bookState.displayedBooks, "viewStyle", createBookSmallGridCard, "Add Book", createAddSmallGridCard);
    } else if (bookState.currentView === "smallList") {
        renderCollectionCards( bookState.displayedBooks, "viewStyle", createBookSmallListCard, "Add Book", createAddSmallListCard);
    } else  if (bookState.currentView === "list"){
        renderCollectionCards( bookState.displayedBooks, "viewStyle", createBookListCard, "Add Book", createAddListCard);
    }
    else {
        renderCollectionCards( bookState.displayedBooks, "viewStyle", createBookCompactGridCard, "Add Book", createAddCompactGridCard);
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

viewToggle( "viewToggle", onViewChanged, "viewStyle" );

applyFilters();

renderBooks();