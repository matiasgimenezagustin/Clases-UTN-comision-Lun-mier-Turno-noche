


const saludar = (objeto, callback) =>{
    callback(objeto)
}

saludar(
    {
        id: 3,
        precio: 8.99,
        nombre: "Producto 3"
    }, (objeto)=>{
    console.log(objeto.precio)
})

saludar(
    {
        id: 3,
        precio: 8.99,
        nombre: "Producto 3"
    }, (objeto)=>{
    alert(objeto.precio)
})
saludar(
    {
        id: 3,
        precio: 8.99,
        nombre: "Producto 3"
    }, (objeto)=>{
    document.write(objeto.precio)
})


/* const find = (array, callback) =>{
    for(const element of array){
        
        if(callback(element)){
            return element
        }
    }
}
console.log(find(productos, (producto) =>{
    return producto.id == 2
} )) */