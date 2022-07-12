const btx = document.querySelector(".bm2");
const inicio = document.querySelector(".info");

btx.addEventListener("click", () =>{
    inicio.style.display = 'none'
})

document.addEventListener("click", async({target})=> {
    console.log(target.classList.contains("carr"));
    console.log(target.classList)

if (target.classList.contains("imgcos")){
     const data =  await getData(url);
    inicio.style.display = 'none'     
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

