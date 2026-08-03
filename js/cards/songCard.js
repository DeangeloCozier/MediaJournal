function createSongCard(song){
    
    return `

        <div class="card" data-id="${song.id}">

            <div class="cardOverlay">
                <div class="leftIcons">

                    <span class="mainType ${getMainClass(song.mainType)}"> 
                        ${song.mainType} 
                    </span>

                </div>

                <div class="rightIcons">
                    ${
                        song.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        song.rating == null
                        ? `<span class="rating ${getRatingClass(song.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(song.rating)}">
                                ${song.rating.toFixed(1)}
                            </span>`
                    }

                </div>

                <img src="${song.poster}" alt="${song.title}">

                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${song.progress}%">
                    </div>
                </div>
            </div>

        <p class="title">${song.title}</p>

        </div>

    `;
    
}