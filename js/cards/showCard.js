function createShowCard(show) {

    const poster = show.poster || "../assets/posters/default.svg";

    return `

        <div class="card" data-id="${show.id}" data-type="${show.mediaType}">

            <div class="cardOverlay">
                <div class="leftIcons">

                    <span class="mainType ${getMainClass(show.mainType)}"> 
                        ${show.mainType} 
                    </span>

                </div>

                <div class="rightIcons">
                    ${
                        show.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        show.rating == null
                        ? `<span class="rating ${getRatingClass(show.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(show.rating)}">
                                ${show.rating.toFixed(1)}
                            </span>`
                    }

                </div>

                <img src="${poster}" alt="${show.title}">

                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${show.progress}%">
                    </div>
                </div>
            </div>
     
            <p class="title">${show.title}</p>

        </div>

    `;

}

function createShowSmallGridCard(show){

    const poster = show.poster || "../assets/posters/defaultList.svg";

    return `

        <div class="smallGridCard" dataID="${show.id}">
            
            <img src="${poster}" alt="${show.title}">

            <div class="smallGridCardInformation">

                <div class = smallGridTopIcons>
                    ${
                        show.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        show.rating == null
                        ? `<span class="rating ${getRatingClass(show.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(show.rating)}">
                                ${show.rating.toFixed(1)}
                            </span>`
                    }

                    <span class="mainType ${getMainClass(show.mainType)}"> 
                        ${show.mainType} 
                    </span>
                </div> 

                <div class="smallGridCardText">
                    <p>${show.title}</p>
                </div>
                
                <div class="smallGridBottomIcons">
                    <div class="progress">
                        <div
                            class="progress-fill"
                            style="width:${show.progress}%">
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

    `;

}

function createShowSmallListCard(show){

    const poster = show.poster || "../assets/posters/defaultList.svg";

    return `

        <div class="smallListCard" dataID="${show.id}">
            
            <img src="${poster}" alt="${show.title}">

            <div class="smallListCardInformation">
                <div class="smallListCardAlignment">
                    <div class="smallListContainer">
                        <div class="smallListColumn">

                            <p class="smallListTitle">${show.title}</p>

                        </div>

                        <div class="smallListColumn">

                            <p class="smallListDescription">${show.description}</p>
                    
                        </div>
                    </div>
                </div>

                <div>
                        ${show.genres.map( genre => `<span class="genre"> ${genre}</span>`).join('')}
                </div>
            </div>   
        </div>
            
    `;
}

function createShowListCard(show) {

    const poster = show.poster || "../assets/posters/defaultList.svg";

    return `
        <div class="listCard" dataID="${show.id}">

            <div class="cardOverlay">
                <div class="leftIconList">
                    <span class="mainType ${getMainClass(show.mainType)}"> 
                        ${show.mainType} 
                    </span>
                </div>

                <div class="rightIconList">
                    ${
                        show.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                        </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                        </span>`
                    }

                    ${
                        show.rating == null
                        ? `<span class="rating ${getRatingClass(show.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(show.rating)}">
                                ${show.rating.toFixed(1)}
                            </span>`
                    }

                </div>

                <img src="${poster}" alt="${show.title}" class="listImage">    

                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${show.progress}%">
                    </div>
                </div>
            </div>


            <div class="listCardInformation">
                <p class="smallListTitle">${show.title}</p>

                <div class="listGenre">
                        ${show.genres.map( genre => `<span class="genre"> ${genre}</span>`).join('')}
                </div>

                <p class="listDescription">${show.description}</p>
            </div>
        </div>
    `;
}

function createShowCompactGridCard(show){

    const poster = show.poster || "../assets/posters/default.svg";

    return `
        <div class="card" data-id="${show.id}">
            <div class="compactGridCardOverlay">

                <div class="leftIcons">

                    <span class="mainType ${getMainClass(show.mainType)}"> 
                        ${show.mainType} 
                    </span>

                </div>

                <div class="rightIcons">
                    ${
                        show.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        show.rating == null
                        ? `<span class="rating ${getRatingClass(show.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(show.rating)}">
                                ${show.rating.toFixed(1)}
                            </span>`
                    }

                </div>
                
                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${show.progress}%">
                    </div>
                </div>

                <img src="${poster}" alt="${show.title}">
                <p class="compactGridCardText">${show.title}</p>
            </div>
        </div>
    `;

}
