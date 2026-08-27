const list = [...movies, ...shows, ...games, ...books, ...songs];

document.addEventListener("click", function(event) {

    const card = event.target.closest(".card");

    if (!card) return;

    const id = Number(card.dataset.id);

    const type = card.dataset.type;

    const container = card.closest('#movie-container, #show-container, #game-container, #song-container, #book-container, #favorite-container');

    const cardInfo = list.find(entry => entry.mediaType === type && entry.id === id);

    console.log(cardInfo);
    console.log(container);
});