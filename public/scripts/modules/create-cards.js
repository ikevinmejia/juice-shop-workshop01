const createCards = (container, template, imagen, nombre, descrip, precio) => {
    const fragment = document.createDocumentFragment();

    template.querySelector('img').setAttribute('src', imagen);
    template.querySelector('#nombre').textContent = nombre;
    template.querySelector('#descripcion').textContent = descrip;
    template.querySelector('#precio').textContent = precio;

    const clone = document.importNode(template, true);

    fragment.append(clone);

    container.append(fragment);

    return container;
}

export default createCards;