function createBookCard(book){
    return `
        <div class=card>
            <img src="${book.poster}" alt="${book.title}">
            <p>${book.title}</p>
        </div>
    `;
}