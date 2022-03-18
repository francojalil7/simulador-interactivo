
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



for(let i = 0; i < cantP; i++){
    productos.push(new Producto(prompt("ingrese tipo producto"), prompt("ingrese vencimiento de producto"), prompt("ingrese precio")))
}