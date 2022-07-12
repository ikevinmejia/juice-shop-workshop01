
import { getData, URL } from "./modules/crud.js";
import insertCardsToHome from "./modules/insert-cards-home.js";

const template = document.querySelector('template').content;
const container = document.querySelector('#cards-container')

const datos = await getData(`${URL}Productos`)

insertCardsToHome(container, template, datos);



