function createShowCard(show) {

    return `<div class="card">
                <img src="${show.poster}" alt="${show.title}">
                <p>${show.title}</p>
            </div>`;

}