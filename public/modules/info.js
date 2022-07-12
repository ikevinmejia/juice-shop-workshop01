

const btx = document.querySelector(".bm2");
const inicio = document.querySelector(".info");

btx.addEventListener("click", () =>{
    inicio.style.display = 'none'
})

/*export const odjetos = (data , container) => {
    container.innerHTML = ""
    data.forEach((element) => {
        const {} = element
        container.innerHTML += "<img id='1' src="+img+" class='imgcos' alt='hola'><div class='cajita'><h1 class='h1'>Ralph el Demoledor</h1><h2 class='h1'> 11.000</h2></div><div class='cajita2'><h3 class='h2'>Sinopsis Ralph el Demoledor anhela ser adorado como lo es Fix-It Felix, el perfecto niño bueno de su videojuego. El problema es que nadie quiere a un chico malo.Ralph el Demoledor anhela ser adorado como lo es Fix-It Felix, el perfecto niño bueno de su videojuego. El problema es que nadie quiere a un chico malo. Pero sí a un héroe… de manera que, cuando aparece un moderno videojuego de disparos en primera persona con la dura Sargento Calhoun, Ralph ve en él su pasaporte al heroí</h3></div></div>" 
    })

}
document.addEventListener("click", async({target})=> {
    console.log(target.classList.contains("carr"));
    console.log(target.classList)
if (target.classList.contains("imgcos")){
     const data =  await getData(url + "electronics" );
    inicio.style.display = 'none'     
    info1.style.display = 'block';
     caja1.style.display = 'none'
     const dato = data.find((p)=> p.id === target.id)
        const m = document.getElementById("img_pro")
        const t = document.getElementById("t1")
        const t2 = document.getElementById("t2")
        const di = document.querySelector(".yolo")
        m.src = dato.imgproduto
        t.textContent = dato.descripcion
        t2.textContent = dato.costo
        di.id = dato.id
        di.addEventListener("click", async() =>{
            postd(dato);
            alert("su producto fue añadido al carrito")
        })            
    console.log(dato);
                                        
    }        
} )
*/
