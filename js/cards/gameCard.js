function createGameCard(game) {

    return `<div class="card">
                <img src="${game.poster}" alt="${game.title}">
                <p>${game.title}</p>
            </div>`;

}