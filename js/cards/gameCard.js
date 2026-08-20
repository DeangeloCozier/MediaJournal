function createGameCard(game) {

    const poster = game.poster || "../assets/posters/default.svg";

    return `

        <div class="card" data-id="${game.id}">

            <div class="cardOverlay">
                <div class="leftIcons">

                    <span class="mainType ${getMainClass(game.mainType)}"> 
                        ${game.mainType} 
                    </span>

                </div>

                <div class="rightIcons">
                    ${
                        game.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        game.rating == null
                        ? `<span class="rating ${getRatingClass(game.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(game.rating)}">
                                ${game.rating.toFixed(1)}
                            </span>`
                    }

                </div>
            
                <img src="${poster}" alt="${game.title}">

                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${game.progress}%">
                    </div>
                </div>
            </div>

            <p class="title">${game.title}</p>

        </div>

    `;

}

function createGameSmallGridCard(game){

    const poster = game.poster || "../assets/posters/defaultList.svg";

    return `

        <div class="smallGridCard" dataID="${game.id}">
            
            <img src="${poster}" alt="${game.title}">

            <div class="smallGridCardInformation">

                <div class = smallGridTopIcons>
                    ${
                        game.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        game.rating == null
                        ? `<span class="rating ${getRatingClass(game.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(game.rating)}">
                                ${game.rating.toFixed(1)}
                            </span>`
                    }

                    <span class="mainType ${getMainClass(game.mainType)}"> 
                        ${game.mainType} 
                    </span>
                </div> 

                <div class="smallGridCardText">
                    <p>${game.title}</p>
                </div>
                
                <div class="smallGridBottomIcons">
                    <div class="progress">
                        <div
                            class="progress-fill"
                            style="width:${game.progress}%">
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

    `;

}

function createGameSmallListCard(game){

    const poster = game.poster || "../assets/posters/defaultList.svg";

    return `

        <div class="smallListCard" dataID="${game.id}">
            
            <img src="${poster}" alt="${game.title}">

            <div class="smallListCardInformation">
                <div class="smallListCardAlignment">
                    <div class="smallListContainer">
                        <div class="smallListColumn">

                            <p class="smallListTitle">${game.title}</p>

                        </div>

                        <div class="smallListColumn">

                            <p class="smallListDescription">${game.description}</p>
                    
                        </div>
                    </div>
                </div>

                <div>
                        ${game.genres.map( genre => `<span class="genre"> ${genre}</span>`).join('')}
                </div>
            </div>   
        </div>
            
    `;
}

function createGameListCard(game) {

    const poster = game.poster || "../assets/posters/defaultList.svg";

    return `
        <div class="listCard" dataID="${game.id}">

            <div class="cardOverlay">
                <div class="leftIconList">
                    <span class="mainType ${getMainClass(game.mainType)}"> 
                        ${game.mainType} 
                    </span>
                </div>

                <div class="rightIconList">
                    ${
                        game.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                        </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                        </span>`
                    }

                    ${
                        game.rating == null
                        ? `<span class="rating ${getRatingClass(game.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(game.rating)}">
                                ${game.rating.toFixed(1)}
                            </span>`
                    }

                </div>

                <img src="${poster}" alt="${game.title}" class="listImage">    

                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${game.progress}%">
                    </div>
                </div>
            </div>


            <div class="listCardInformation">
                <p class="smallListTitle">${game.title}</p>

                <div class="listGenre">
                        ${game.genres.map( genre => `<span class="genre"> ${genre}</span>`).join('')}
                </div>

                <p class="listDescription">${game.description}</p>
            </div>
        </div>
    `;
}

function createGameCompactGridCard(game){

    const poster = game.poster || "../assets/posters/default.svg";

    return `
        <div class="card" data-id="${game.id}">
            <div class="compactGridCardOverlay">

                <div class="leftIcons">

                    <span class="mainType ${getMainClass(game.mainType)}"> 
                        ${game.mainType} 
                    </span>

                </div>

                <div class="rightIcons">
                    ${
                        game.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        game.rating == null
                        ? `<span class="rating ${getRatingClass(game.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(game.rating)}">
                                ${game.rating.toFixed(1)}
                            </span>`
                    }

                </div>
                
                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${game.progress}%">
                    </div>
                </div>

                <img src="${poster}" alt="${game.title}">
                <p class="compactGridCardText">${game.title}</p>
            </div>
        </div>
    `;

}