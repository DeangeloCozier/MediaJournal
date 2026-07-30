function createSongCard(song){
    return `
        <div class="card">
            <img src="${song.poster}" alt="${song.title}">
            <p>${song.title}</p>
        </div>
    `;
}