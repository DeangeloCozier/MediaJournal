function renderBooks(data = books) {
    renderCollectionCards(data, "book-container", createBookCard, "Add Book");
}

renderBooks();

SearchEntities("bookSearch", books, renderBooks);