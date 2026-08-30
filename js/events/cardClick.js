document.addEventListener("click", function(event) {
    const addCard = event.target.closest('.add-card');
    if (addCard) {
        const container = event.target.closest('#movie-container, #show-container, #game-container, #book-container, #song-container, #favorite-container');
        let message = '';

        switch(container.id){
            case "movie-container":
                    message = 'Movie Container';
                break;

            case "show-container":
                    message = 'Show Container';
                break;

            case "game-container":
                    message = 'Game Container';
                break;

            case "book-container":
                    message = 'Book Container';
                break;

            case "song-container":
                    message = 'Music Container';
                break;

            default:
                    message = 'Special Container';
                break;
        }

        console.log(message + ' Add Card was clicked');
        return;
    }

    const card = event.target.closest('.card, .smallGridCard, .smallListCard, .listCard');
    if (card) {
        const id = Number(card.dataset.id);
        const type = card.dataset.type;
        const cardInfo = list.find(entry => entry.mediaType === type && entry.id === id);
        
        
        console.log(cardInfo);
    }
});