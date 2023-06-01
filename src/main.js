import { arcadeMajorFilter, arcadeMinorFilter } from './data.js';
import tarot from './data/tarot/tarot.js';


const showCards = document.getElementById("showAllCards");
const cards= tarot.cards;
const filterButtonSelection = document.getElementById("filterbutton");

console.log(cards)

cards.forEach((imageCards) => {
    showCards.innerHTML += `
    <div><img src="${imageCards.img}"></div>`
})

  
  
  /*console.log(arcadeMajorFilter);*/

  filterButtonSelection.addEventListener ("change", () =>{
    const optionSelected = filterButtonSelection.value
    let dataCard;
    if (optionSelected === "Arcade minor"){
        dataCard = arcadeMinorFilter;
        console.log(arcadeMinorFilter);
    }
    showCards.innerHTML = "";
    dataCard.forEach((cardArcadeMinor) =>{
        showCards.innerHTML += `
        <div><img src="${cardArcadeMinor.img}"></div>`
    });
});



 /*function filtrar (data,propiedad){
    return data.filter(tarotCards => {
        return tarotCards.type === propiedad
        })
      }
      
      
      console.log(filtrar(cards,"minor"));
      console.log(filtrar(cards,"major"));
      */