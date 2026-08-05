function createBookCard(book){
    
    const poster = book.poster || "../assets/posters/default.svg";

    return `

        <div class="card" data-id="${book.id}">

            <div class="cardOverlay">
                <div class="leftIcons">

                    <span class="mainType ${getMainClass(book.mainType)}"> 
                        ${book.mainType} 
                    </span>

                </div>

                <div class="rightIcons">
                    ${
                        book.favorite
                        ? `<span class="favoriteTrue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                        : `<span class="favoriteFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 3.97 5.82"><path d="M.26 0A.26.26 0 0 0 0 .26v5.56L1.98 4.5l1.99 1.32V.26A.26.26 0 0 0 3.7 0z" style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:.396875;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"/></svg>
                           </span>`
                    }

                    ${
                        book.rating == null
                        ? `-.-`
                        :  `<span class="rating ${getRatingClass(book.rating)}">
                                ${book.rating.toFixed(1)}
                            </span>`
                    }
                    
                </div>

                <img src="${poster}" alt="${book.title}">

                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width:${book.progress}%">
                    </div>
                </div>

            </div>

            <p class="title">${book.title}</p>

        </div>

    `;
}