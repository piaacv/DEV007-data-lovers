import tarot from './data/tarot/tarot.js';


const showCards = document.getElementById("showAllCards");
const cards= tarot.cards;
console.log(cards)

cards.forEach(imageCards => {
    showAllCards.innerHTML += `
    <div><img src="${imageCards.img}"></div>`
})