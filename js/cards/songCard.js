function createSongCard(song){
    
    const poster = song.poster || "../assets/posters/default.svg";

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

                <img src="${poster}" alt="${song.title}">

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

function createMusicSmallGridCard(music){

    const poster = music.poster || "../assets/posters/defaultList.svg";

    return `

        <div class="smallGridCard" dataID="${music.id}">
            
            <img src="${poster}" alt="${music.title}">

            <div class="smallGridCardInformation">

                <div class = smallGridTopIcons>
                    ${
                        music.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        music.rating == null
                        ? `<span class="rating ${getRatingClass(music.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(music.rating)}">
                                ${music.rating.toFixed(1)}
                            </span>`
                    }

                    <span class="mainType ${getMainClass(music.mainType)}"> 
                        ${music.mainType} 
                    </span>
                </div> 

                <div class="smallGridCardText">
                    <p>${music.title}</p>
                </div>
                
                <div class="smallGridBottomIcons">
                    <div class="progress">
                        <div
                            class="progress-fill"
                            style="width:${music.progress}%">
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

    `;

}

function createMusicSmallListCard(music){

    const poster = music.poster || "../assets/posters/defaultList.svg";

    return `

        <div class="smallListCard" dataID="${music.id}">
            
            <img src="${poster}" alt="${music.title}">

            <div class="smallListCardInformation">
                <div class="smallListCardAlignment">
                    <div class="smallListContainer">
                        <div class="smallListColumn">

                            <p class="smallListTitle">${music.title}</p>

                        </div>

                        <div class="smallListColumn">

                            <p class="smallListDescription">${music.description}</p>
                    
                        </div>
                    </div>
                </div>

                <div>
                        ${music.genres.map( genre => `<span class="genre"> ${genre}</span>`).join('')}
                </div>
            </div>   
        </div>
            
    `;
}

function createMusicListCard(music) {

    const poster = music.poster || "../assets/posters/defaultList.svg";

    return `
        <div class="listCard" dataID="${music.id}">

            <div class="cardOverlay">
                <div class="leftIconList">
                    <span class="mainType ${getMainClass(music.mainType)}"> 
                        ${music.mainType} 
                    </span>
                </div>

                <div class="rightIconList">
                    ${
                        music.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                        </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                        </span>`
                    }

                    ${
                        music.rating == null
                        ? `<span class="rating ${getRatingClass(music.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(music.rating)}">
                                ${music.rating.toFixed(1)}
                            </span>`
                    }

                </div>

                <img src="${poster}" alt="${music.title}" class="listImage">    

                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${music.progress}%">
                    </div>
                </div>
            </div>


            <div class="listCardInformation">
                <p class="smallListTitle">${music.title}</p>

                <div class="listGenre">
                        ${music.genres.map( genre => `<span class="genre"> ${genre}</span>`).join('')}
                </div>

                <p class="listDescription">${music.description}</p>
            </div>
        </div>
    `;
}

function createMusicCompactGridCard(music){

    const poster = music.poster || "../assets/posters/default.svg";

    return `
        <div class="card" data-id="${music.id}">
            <div class="compactGridCardOverlay">

                <div class="leftIcons">

                    <span class="mainType ${getMainClass(music.mainType)}"> 
                        ${music.mainType} 
                    </span>

                </div>

                <div class="rightIcons">
                    ${
                        music.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        music.rating == null
                        ? `<span class="rating ${getRatingClass(music.rating)}">
                                -.-
                            </span>`
                        :  `<span class="rating ${getRatingClass(music.rating)}">
                                ${music.rating.toFixed(1)}
                            </span>`
                    }

                </div>
                
                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${music.progress}%">
                    </div>
                </div>

                <img src="${poster}" alt="${music.title}">
                <p class="compactGridCardText">${music.title}</p>
            </div>
        </div>
    `;

}