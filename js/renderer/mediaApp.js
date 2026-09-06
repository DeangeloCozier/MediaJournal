const data = JSON.parse(sessionStorage.getItem("mediaInfo"));

renderCard(data, "additionalContentColumm", createCard);
console.log(data);