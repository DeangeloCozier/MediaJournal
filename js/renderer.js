function renderCards(data, containerId, createCard, addCardText) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    const newest = [...data]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);

    newest.forEach(item => {

        container.innerHTML += createCard(item);

    });

    container.innerHTML += createAddCard(addCardText);

}

function createAddCard(text) {

    return ` 
        <div class="add-card">
            +
            <p>${text}</p>
        </div>
    `;

}