import { getData,deleteData,URL } from "./modules/Crud.js";
import {printCarrito} from "./modules/getCarrito.js";


const template = document.getElementById("template").content;
const container = document.getElementById("cont")
const data = await getData(URL+"Car")
const total = document.getElementById("total");
let suma = 0;
let convert;


data.forEach(e => {
    convert = e.precio.slice(1)
    convert = parseFloat(convert)
    suma += convert
});

total.textContent = "$"+suma

document.addEventListener('DOMContentLoaded', printCarrito(data, template, container))

//delete

document.addEventListener('click', async ({target})=>{
    if(target.id >= 1){
        convert = data[target.id-1].precio
        convert = parseFloat(convert.slice(1))
        suma = suma - convert
        total.textContent = "$"+suma
        deleteData(`https://juice-shop-webside.herokuapp.com/Car/${target.id}`)
        let display = document.getElementById(target.id+"d")
        display.classList.add("hidden")
    }
    
})