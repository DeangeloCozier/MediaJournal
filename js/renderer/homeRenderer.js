function renderCards(data, containerId, createCard, addCardText) {

    const container = document.getElementById(containerId);
    
    if (!container) return;

    container.innerHTML = "";

    const cardsPerRow = getCardsPerRow(containerId);

    // Remember to reserve one slot for the Add card
    const maxCards = Math.max(cardsPerRow, 0);

    const newest = [...data]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, maxCards);

    newest.forEach(item => {
        container.innerHTML += createCard(item);
    });

    container.innerHTML += createAddCard(addCardText);
}

function createAddCard(text) {

    return `
        <div class="card">
            <div class="add-card">
                <img src="../assets/icons/addentity.svg" alt="+">
            </div>
            <p>${text}</p>
        </div>
    `;

}
