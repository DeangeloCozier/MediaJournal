function searchEntities(inputID, renderFunction){

    const input = document.getElementById(inputID);

    input.addEventListener("input",() => {
        renderFunction(input.value);
    });
}