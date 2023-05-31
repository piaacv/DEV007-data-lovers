import tarot from './data/tarot/tarot.js';


const showCards = document.getElementById("showAllCards");
const filer_nameaz= document.getElementById("filter_nameza")
const filer_nameza= document.getElementById("filter_nameaz")
const filer_acendente= document.getElementById("filter_acendente")
const filter_decendente= document.getElementById("filter_decendente")
const cards= tarot.cards;

console.log(cards)

cards.forEach(imageCards => {
    showAllCards.innerHTML += `
    <div><img src="${imageCards.img}"></div>`
})

const filterbutton = document.getElementById(filterbutton)
filterbutton.addEventListener ("click", () =>{
    if (filterbutton === filer_nameza){
        showCards.innerHTML
    }
}
 )