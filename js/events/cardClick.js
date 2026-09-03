document.addEventListener("click", function(event) {
    const addCard = event.target.closest('.add-card');
    const container = event.target.closest('#movie-container, #show-container, #game-container, #book-container, #song-container, #favorite-container');
    const popup = document.querySelector('#cardPopupOverlay');

    const popupCardClick = event.target.closest(".popupCard");

    // If popup is open
    if (!popup.classList.contains("hidden")) {

        // Click was outside popupCard
        if (!popupCardClick) {
            popup.classList.add("hidden");

            const mainContainer = document.querySelector('.mainHomeContent, .contentArea, #movie-container, #show-container, #game-container, #book-container, #song-container');
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
});

document.addEventListener('dblclick', (event) => {
    if ( event.target.closest('.add-card')) return; //Prevents loading issues for characteristics that add card does not have


    const mainContainer = document.querySelector('.mainHomeContent, .contentArea, #movie-container, #show-container,  #game-container, #book-container, #song-container');
    const popup = document.querySelector('#cardPopupOverlay');

    const card = event.target.closest('.card, .smallGridCard, .smallListCard, .listCard');

    if (card) {
        const id = Number(card.dataset.id);
        const type = card.dataset.type;
        const cardInfo = list.find(entry => entry.mediaType === type && entry.id === id);

        const popupCard = document.querySelector(".popupCard");
        const poster = cardInfo.poster || "../assets/posters/default.svg";

        popupCard.innerHTML = `
            <div class="popUpCard">
                <div>
                    <div class="popUpCardOverlay">
                        <div class="progress">
                            <div
                                class="progress-fill"
                                style="width:${cardInfo.progress}%">
                            </div>
                        </div>
                        <img src="${poster}" alt="${cardInfo.title}">
                    </div>
                    <div class= bottomIcons>
                        ${
                            cardInfo.favorite
                            ? `<span class="favoriteTrue">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                            </span>`
                            : `<span class="favoriteFalse">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                            </span>`
                        }

                        <span class="editIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M19.15 5.5H6.5a3 3 135 0 0-3 3v17a3 3 45 0 0 3 3h16.1a3 3 135 0 0 3-3v-12" style="stroke-opacity:1;stroke-linejoin:round;stroke-linecap:round;stroke-width:2.87888px;stroke:currentColor;fill-opacity:1;fill:none"/><path d="M15 16.5v-2a1.2 1.2 112.5 0 1 .35-.85l11.3-11.3a.5.5 0 0 1 .7 0l2.3 2.3a.5.5 90 0 1 0 .7l-11.3 11.3a1.2 1.2 157.5 0 1-.85.35h-2a.5.5 45 0 1-.5-.5Z" style="stroke-opacity:1;stroke-linejoin:miter;stroke-linecap:butt;stroke-width:1px;stroke:currentColor;fill-opacity:1;fill:currentColor"/></svg>
                        </span>

                        ${
                            cardInfo.rating == null
                            ? `<span class="rating ${getRatingClass(cardInfo.rating)}">
                                    -.-
                                </span>`
                            :  `<span class="rating ${getRatingClass(cardInfo.rating)}">
                                    ${cardInfo.rating.toFixed(1)}
                                </span>`
                        }

                        <span class="plusIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path id="a" d="M15.9 4.65h.2a.25.25 45 0 1 .25.25v22.2a.25.25 135 0 1-.25.25h-.2a.25.25 45 0 1-.25-.25V4.9a.25.25 135 0 1 .25-.25" style="paint-order:markers fill stroke;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linejoin:round;stroke-linecap:round;stroke-width:5.30544;stroke:currentColor;fill:currentColor"/><use xlink:href="#a" transform="rotate(90 16 16)"/></svg>
                        </span>
                    </div>
                </div>
                <div>
                    <h1 class="cardTitle">${cardInfo.title}</h1>

                    <h2 class="creatorNames">by ${formatNames(cardInfo)}</h2>

                    <div class="cardInformation">
                        <p>${getYear(cardInfo)} </p>
                        
                        <svg class="dot" xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5"><circle cx="2.5" cy="2.5" r=".36" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:4.286;stroke:currentColor;fill-opacity:1;fill:none"/><path d="M2.5.65C1.72.62 1 1.18.74 1.9c-.22.66-.06 1.43.45 1.9a1.85 1.85 0 0 0 3.15-1.49 1.9 1.9 0 0 0-1.3-1.6A2 2 0 0 0 2.5.66Z" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:.122;stroke:currentColor;fill-opacity:1;fill:currentColor;display:inline"/></svg>

                        <p>${cardInfo.mediaType}</p>

                        <svg class="dot" xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5"><circle cx="2.5" cy="2.5" r=".36" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:4.286;stroke:currentColor;fill-opacity:1;fill:none"/><path d="M2.5.65C1.72.62 1 1.18.74 1.9c-.22.66-.06 1.43.45 1.9a1.85 1.85 0 0 0 3.15-1.49 1.9 1.9 0 0 0-1.3-1.6A2 2 0 0 0 2.5.66Z" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:.122;stroke:currentColor;fill-opacity:1;fill:currentColor;display:inline"/></svg>

                        <p>${cardInfo.mainType}</p>

                        <svg class="dot" xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5"><circle cx="2.5" cy="2.5" r=".36" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:4.286;stroke:currentColor;fill-opacity:1;fill:none"/><path d="M2.5.65C1.72.62 1 1.18.74 1.9c-.22.66-.06 1.43.45 1.9a1.85 1.85 0 0 0 3.15-1.49 1.9 1.9 0 0 0-1.3-1.6A2 2 0 0 0 2.5.66Z" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:.122;stroke:currentColor;fill-opacity:1;fill:currentColor;display:inline"/></svg>

                        <p>${cardInfo.runtime}</p>

                        <svg class="dot" xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5"><circle cx="2.5" cy="2.5" r=".36" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:4.286;stroke:currentColor;fill-opacity:1;fill:none"/><path d="M2.5.65C1.72.62 1 1.18.74 1.9c-.22.66-.06 1.43.45 1.9a1.85 1.85 0 0 0 3.15-1.49 1.9 1.9 0 0 0-1.3-1.6A2 2 0 0 0 2.5.66Z" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:.122;stroke:currentColor;fill-opacity:1;fill:currentColor;display:inline"/></svg>

                        <p class="${getWatchingClass(cardInfo.watchingStatus)}">${cardInfo.watchingStatus}</p>
                    </div>
                    <div class="popupGenre">
                        ${cardInfo.genres.map( genre => `<span class="genre"> ${genre}</span>`).join('')}
                    </div>

                    <p class="cardDiscription">${cardInfo.description}</p>
                </div>

                <svg class="advance" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8.47 8.47"><ellipse cx="4.23" cy="4.23" rx="3.86" ry="3.85" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:.77552;stroke:currentColor;fill-opacity:1;fill:none"/><path d="M6.7 4.05 4.94 2.3a.6.6 22.5 0 0-.45-.18h-.27a.11.11 112.5 0 0-.07.18l1.47 1.48a.11.11 112.5 0 1-.07.19h-3.7a.26.26 135 0 0-.27.26.26.26 45 0 0 .26.27h3.7a.11.11 67.5 0 1 .08.19L4.16 6.16a.11.11 67.5 0 0 .07.19h.27a.6.6 157.5 0 0 .45-.19l1.74-1.74a.26.26 90 0 0 0-.37z" style="stroke-opacity:1;stroke-linejoin:miter;stroke-linecap:butt;stroke-width:.264583px;stroke:currentColor;fill-opacity:1;fill:currentColor"/></svg>

            </div>
        `;
        
        mainContainer.classList.add("is-blurry");
        popup.classList.toggle("hidden");

        console.log(cardInfo);
    }

});