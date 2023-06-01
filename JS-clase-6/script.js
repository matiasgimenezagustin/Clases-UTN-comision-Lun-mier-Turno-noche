const productos = [
    {
        id: 1,
        precio: 10.99,
        nombre: "Producto 1"
    },
    {
        id: 2,
        precio: 5.99,
        nombre: "Producto 2"
    },
    {
        id: 3,
        precio: 8.99,
        nombre: "Producto 3"
    }
];


let productosCaros = productos.filter((producto) => producto.precio > 8)

/* console.log(productos.map((producto) => ({...producto, precio:'$' + producto.precio} )))
 */




const obj = {
    id: 1,
    precio: 10.99,
    nombre: "Producto 1"
}

/* Sacar una copia a un objeto */
console.log({...obj, stock: 20, id: 4})




/* const find = (id, array) =>{
    for(const producto of array){
        if(producto.id == id){
            return producto
        }
    }
} */

//Metodo avanzado Find

/* 
console.log(find(2, productos)) */

/* console.log(productos.find( (producto) => producto.id == 2 )) */


//Metodo avanzado Filter
/* 
devuelve siempre un array
*/

/* console.log(productos.filter((producto) =>{
    return producto.precio > 9
})) */

/* console.log(productos.filter((producto) => producto.precio > 9)) */



/* const mensajesRedSocial = [
    "¡Hola a todos! Soy nuevo aquí. ¿Alguien me puede decir cómo funciona esto?",
    "Felicidades a todos los gTonToraduados. ¡Han trabajado muy duro!",
    "¡Qué día tan maravilloso para ir a la playa! ¿Quién se apunta?",
    "¡Estoy emocionado de compartir con ustedes mi nuevo proyecto! Pronto les daré más detalles.",
    "¿Alguien tiene recTontoomendaciones para un buen tonto restaurante en la ciudad?",
    "¡Hoy es mi cuTontompleaños! ¡Feliz de celebrarlo con todos ustedes!",
    "¡Acabo de publicar un nuevo artículo en mi blog! Échale un vistazo y déjame tus comentarios.",
    "¿Alguien sabe dónde puedo encontrar un buen tutorial de JavaScript?",
    "Me encanta esta red social. Conocer gente nueva y compartir ideas es genial.",
    "¡Qué día tan agotador! Necesito unas vacaciones urgentemente tonto.",
]; */
/* 
tenemos un array de mensajes y debemos obtener uinicamente los mensajes donde se haya una infraccion 
(la palabra tonto esta estrictamenrte prohibida)

*/

/* let stringABuscar = prompt('ingrese algo para buscar')


const result = mensajesRedSocial.filter((mensaje) => mensaje.toUpperCase().includes(stringABuscar.toUpperCase()))


alert(result.join('-\n')) */
/* 
let palabra = "Tonto"
 */


/* console.log(mensajesRedSocial.filter((mensaje) => mensaje.length < 70)) */

/* console.log(mensajesRedSocial.filter((mensaje) => mensaje.toUpperCase().includes("tonto".toUpperCase()))) */
/* console.log(mensajesRedSocial.filter((palabra) => palabra.toUpperCase().includes("tonto".toUpperCase())))

const result = mensajesRedSocial.filter((mensaje) => mensaje.toUpperCase().includes('tonto'.toUpperCase())) */

/* console.log(mensajesRedSocial.filter((mensaje) => mensaje.toUpperCase().includes("tonto".toUpperCase()))) */


const gifts = ['cat', 'game', 'socks']


const wrapping = (gifts) => {
    return gifts.map((gift) =>'*'.repeat(gift.length + 2) + '\n*' + gift + '*\n' + '*'.repeat(gift.length + 2) )
} 
const wrapped = wrapping(gifts)
wrapped.forEach(wrappedGift => console.log(wrappedGift))