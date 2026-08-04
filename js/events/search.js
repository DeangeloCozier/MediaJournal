function SearchEntities(inputID, data, renderFunction){

    const input = document.getElementById(inputID);

    input.addEventListener("input",() => {

        const text = input.value.toLowerCase();

        const filtered = data.filter(item => item.title.toLowerCase().includes(text));

        renderFunction(filtered);
    });
}