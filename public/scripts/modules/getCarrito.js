export const printCarrito = (data, template, container) =>{
    const fragment = document.createDocumentFragment();
    data.forEach(e => {
        const{nombre, descripcion, precio, id} = e;
        template.querySelector(".nombre").textContent = nombre;
        template.querySelector(".descripcion").textContent = descripcion;
        template.querySelector(".precio").textContent = precio;
        template.querySelector(".btnEliminar").setAttribute("id", id)
        template.querySelector(".registro").setAttribute("id", id+"d")
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });

    container.appendChild(fragment);
    
}