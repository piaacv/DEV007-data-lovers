import { arcadeMajorFilter, arcadeMinorFilter, sortBy } from './data.js';
import tarot from './data/tarot/tarot.js';


const showCards = document.getElementById("showAllCards");
const cards= tarot.cards;
const filterButtonSelection = document.getElementById("filterbutton");

console.log(cards)

cards.forEach((imageCards) => {
    showCards.innerHTML += `
    <div><img src="${imageCards.img}"></div>`
})


  filterButtonSelection.addEventListener ("change", () =>{
    const optionSelected = filterButtonSelection.value;
    let dataCard;
    if (optionSelected === "Arcade minor"){
        dataCard = arcadeMinorFilter;
        console.log(arcadeMinorFilter);
    
    showCards.innerHTML = "";
    dataCard.forEach((cardArcadeMinor) =>{
        showCards.innerHTML += `
        <div><img src="${cardArcadeMinor.img}"></div>`}
  )} else if (optionSelected === "Arcade major"){
        dataCard = arcadeMajorFilter;
        console.log(arcadeMajorFilter);
        showCards.innerHTML = "";
    dataCard.forEach((cardArcadeMajor) =>{
        showCards.innerHTML += `
        <div><img src="${cardArcadeMajor.img}"></div>`
    })
  } else if (optionSelected === "Lower number"){
    dataCard = sortBy(cards);
    showCards.innerHTML = "";
    dataCard.forEach((lowerCardNumber) =>{
        showCards.innerHTML += `
        <div><img src="${lowerCardNumber.img}"></div>`
    })
} else if (optionSelected === "Higher number"){
    dataCard = sortBy(cards).reverse();
    showCards.innerHTML = "";
    dataCard.forEach((lowerCardNumber) =>{
        showCards.innerHTML += `
        <div><img src="${lowerCardNumber.img}"></div>`
    })
  }else{
        cards.forEach((imageCards) => {
            showCards.innerHTML += `
            <div><img src="${imageCards.img}"></div>`
        })
    }
});