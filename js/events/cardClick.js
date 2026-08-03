container.addEventListener("click",(event)=>{

    const card = event.target.closest(".card");

    if(!card) return;

    const id = card.dataset.id;
    
    console.log(id);

});