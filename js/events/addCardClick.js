document.addEventListener("click", function(event) {

    const card = event.target.closest('.add-card');

    console.log("Add Card was clicked");
});