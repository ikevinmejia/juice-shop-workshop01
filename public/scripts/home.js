import createCards from "./modules/create-cards.js";
import insertCardsToHome from "./modules/insert-cards-home.js";

const template = document.querySelector('template').content;
const container = document.querySelector('#cards-container')


insertCardsToHome(container, template, datos)



