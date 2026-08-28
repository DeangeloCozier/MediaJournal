function renderHomeCards(data, containerId, createCard, addCardText) {

    const container = document.getElementById(containerId);
    
    if (!container) return;

    container.innerHTML = "";

    const cardsPerRow = getCardsPerRow(containerId);

    // Remember to reserve one slot for the Add card
    const maxCards = Math.max(cardsPerRow - 1, 0);

    const newest = [...data]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, maxCards);

    newest.forEach(item => {
        container.innerHTML += createCard(item);
    });

    container.innerHTML += createAddCard(addCardText);
}

function renderCollectionCards(data, containerId, createCard, addCardText, addCard) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    // Add card first
    container.innerHTML += addCard(addCardText);

    // Newest first
    [...data]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .forEach(item => {
            container.innerHTML += createCard(item);
        });

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

function createAddSmallGridCard(text) {

    return `
        <div class="smallGridCard">
            <div class="addSmallGridCard">
                <img src="../assets/icons/addentity.svg" alt="+">
            </div>
            <div class="smallGridAddCardText">
                <p>${text}</p>
            </div>
        </div>
    `;

}

function createAddSmallListCard(text) {

    return `
        <div class="smallListCard">
            <div class="addSmallListCard">
                <img src="../assets/icons/addentity.svg" alt="+">
            </div>
            <div>
                <p class="smallListTitle">${text}</p>
            </div>
        </div>
    `;

}

function createAddListCard(text) {

    return `
        <div class="listCard">
            <div class="addListCard">
                <img src="../assets/icons/addentity.svg" alt="+">
            </div>
            <div>
                <p class="smallListTitle">${text}</p>
            </div>
        </div>
    `;

}

function createAddCompactGridCard(text){
    return `
        <div class="card">
            <div class="add-card">
                <img src="../assets/icons/addentity.svg" alt="+">
                <p class="addCompactGridCardText">${text}</p>
            </div>
        </div>
    `;
}