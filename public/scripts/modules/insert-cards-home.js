import  createCards  from './create-cards.js'

const insertCardsToHome = (container, template, data) => {
    data.forEach(element =>{
        const {url:imagen, nombre, descripcion, precio} = element;
        createCards(container, template, imagen, nombre, descripcion, precio);
    })
}

export default insertCardsToHome;