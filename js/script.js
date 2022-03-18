
let productos = []
let cantP = 5;



class Producto{
    constructor(tipo, vencimiento, precio){
        this.tipo = tipo;
        this.vencimiento = vencimiento;
        this.precio = precio;
    }
}

let entrada = prompt("desea cargar productos? ponga si o no")


if(entrada.toUpperCase() == "SI"){

    cantP = prompt("cuantos productos desea agregar?")

    if(tipeof(cantP) === 'number'){

        for(let i = 0; i < cantP; i++){
            productos.push(new Producto(prompt("ingrese tipo producto"), prompt("ingrese vencimiento de producto"), prompt("ingrese precio")))
        }

    }
    
}


function calcularGanancias(productos){
    let ganancias = 0
    for(let i = 0; i < productos.length; i++){
        ganancias += productos[i].precio
    }
    return ganancias
}

function existeProducto(productos, producto){
    let existe = false
    for(let i = 0; i < productos.length; i++){
        if(productos[i] == producto){
        existe = true
    }
    return existe
}