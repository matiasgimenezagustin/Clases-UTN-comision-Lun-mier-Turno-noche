/* Crear un Ecommerce

Generar una lista de productos (almenos 5 ) con los campos precio, nombre, categoria, stock

Generar una funcion llamada renderizarLista que recibira un array y devolvera un string en el sig formato
`
Lista de productos disponibles: \n
1- nombre primer producto \n
2- nombre segundo producto \n
3- ...
`


Generar un array vacio llamado carrito

Solicitar al usuario que escriba "SI" si desea comprar
En caso de escribir SI se solicitara el numero del producto de la sig lista  (usar la funcion renderizar lista)
Una vez obtengamos el numero, buscar el producto en el array, y preguntar cuanta cantidad se desea comprar, si la cantidad supera el stock disponible de ese producto decir por alerta 'No tenemos el suficiente stock'
Si no, se procedera agregar el producto con un nuevo campo llamado cantidad (con la cantidad comprada ) al array carrito

Se volvera a preguntar si desea comprar para repetir el proceso
*/

const productos = [

    {
        precio : 2,
        nombre : 'Auto',
        categoria : 'casa y jardin',
        stock : 6
    },
    {
        precio : 2,
        nombre : 'Motrola g8',
        categoria : 'casa y jardin',
        stock : 9
    },
    {
        precio : 2,
        nombre : 'Tele',
        categoria : 'casa y jardin',
        stock : 4
    },
]
const carrito = []

const renderizarLista = (array) =>{
    let listaResultante = 'Lista de productos disponibles:\n'

    array.forEach((element, index)=>{
    
        listaResultante = `${listaResultante + (index + 1)}- ${element.nombre}\n`

    })

    return listaResultante
}

let decision = prompt('Escriba SI si desea comprar ')

while(decision === 'SI'){
    const producto = productos[prompt(renderizarLista(productos)) - 1]
    console.log(producto)
    let cantidad = prompt('Cuantos ' + producto.nombre + ' desea comprar?')
    if(cantidad <= producto.stock){
        producto.cantidad = cantidad //Creo el campo/propiedad cantidad
        console.log(producto)
        carrito.push(producto)
        
    }else{
        alert("Error: Stock insuficiente")
    }
    decision = prompt('Escriba SI si desea hacer otra compra')
}



