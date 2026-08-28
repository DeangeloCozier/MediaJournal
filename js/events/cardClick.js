document.addEventListener("click", function(event) {
    const addCard = event.target.closest('.add-card');
    if (addCard) {
        console.log("Add Card was clicked");
        return;
    }

    const card = event.target.closest('.card, .smallGridCard, .smallListCard, .listCard');
    if (card) {
        const id = Number(card.dataset.id);
        const type = card.dataset.type;
        const cardInfo = list.find(entry => entry.mediaType === type && entry.id === id);
        
        console.log(cardInfo);
    }
});