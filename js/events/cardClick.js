document.addEventListener("click", function(event) {

    const card = event.target.closest(".card");

    if (!card) return;

    const id = Number(card.dataset.id);

    const movie = movies.find(movie => movie.id == id);

    console.log(movie);
});