document.addEventListener("click", function(event) {

    const card = event.target.closest('.card, .smallGridCard, .smallListCard, .listCard');

    if (!card) return;

    const id = Number(card.dataset.id);
    const type = card.dataset.type;

    const cardInfo = list.find(entry => entry.mediaType === type && entry.id === id);

    console.log(cardInfo);
});