function createFavoriteCard(media){
    return `
        <div class="card">
            <img src="${media.poster}" alt="${media.title}">
            <p>${media.title}</p>
        </div>
    `;
}