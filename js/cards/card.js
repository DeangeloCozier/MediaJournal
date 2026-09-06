function createCard(media) {
    
    const poster = media.poster || "../assets/posters/default.svg";

    return `
        <div class="mediaCard">
            <img src="${poster}" alt="${media.title}">      
        </div>
        <div class = "mediaIcons">
             ${
                media.favorite
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
                media.rating == null
                ? `<span class="rating ${getRatingClass(media.rating)}">
                        -.-
                    </span>`
                :  `<span class="rating ${getRatingClass(media.rating)}">
                        ${media.rating.toFixed(1)}
                    </span>`
            }

            <span class="plusIcon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path id="a" d="M15.9 4.65h.2a.25.25 45 0 1 .25.25v22.2a.25.25 135 0 1-.25.25h-.2a.25.25 45 0 1-.25-.25V4.9a.25.25 135 0 1 .25-.25" style="paint-order:markers fill stroke;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linejoin:round;stroke-linecap:round;stroke-width:5.30544;stroke:currentColor;fill:currentColor"/><use xlink:href="#a" transform="rotate(90 16 16)"/></svg>
            </span>
        </div>
        <div class="textRow">
                <span>${media.favorite ? 'Favorited' : 'Add to Favorites'}</span>
                <span>Edit</span>
                <span>Rating</span>
                <span>Add to List</span>
        </div>

        <div class="additionalDetails">
            <h2>Additional Details</h2>
            <h3>Status</h3>
            <h3 class="details">${media.studio}</h3>
            <h3>Source Material</h3>
            <h3>Studio</h3>
            <h3>Publishing Studio</h3>
            <h3>Release Date</h3>
            <h3>Keywords</h3>
        </div>
    `;
}