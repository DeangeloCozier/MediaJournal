document.addEventListener("click", function(event) {
    const addCard = event.target.closest('.add-card');
    const container = event.target.closest('#movie-container, #show-container, #game-container, #book-container, #song-container, #favorite-container');
    
    const mainContainer = document.querySelector('.mainHomeContent');
    const popup = document.querySelector('#cardPopupOverlay');

    const popupCard = event.target.closest(".popupCard");

    // If popup is open
    if (!popup.classList.contains("hidden")) {

        // Click was outside popupCard
        if (!popupCard) {
            popup.classList.add("hidden");

            const mainContainer = document.querySelector(".mainHomeContent");
            mainContainer.classList.remove("is-blurry");

            return;
        }

        // Click was inside popupCard
        return;
    }

    if (addCard) {
        let message = '';

        switch(container?.id){
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
        
        mainContainer.classList.add("is-blurry");
        popup.classList.toggle("hidden");

        console.log(cardInfo);
    }

});