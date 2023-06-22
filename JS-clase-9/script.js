const productos =[
    {
        name: 'pc gamer',
        price: 400,
        id: 1
    },
    {
        name: 'parlantes',
        price: 30,
        id: 2
    },
    {
        name: 'mouse logitech',
        price: 65,
        id: 3
    }
]
const carrito = []
const ultimoCarrito = JSON.parse(localStorage.getItem('carrito'))
if(ultimoCarrito){
    ultimoCarrito.forEach(product =>
        carrito.push(product)
    )
}
else{
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
const productosHTML = document.getElementById('productos')

const renderizarProductos = () =>{
    productos.forEach(product => {
        productosHTML.innerHTML += `
        <div>
            <h2>${product.name}</h2>
            <span><b>Price:</b> ${product.price}</span><br><br>
            <button class='btn-comprar' id='btn-comprar-${product.id}'>Buy</button>
            <hr>
        </div>
        `
    })
    const botonesComprar = document.getElementsByClassName('btn-comprar')
    for(const boton of botonesComprar){
        boton.addEventListener('click', ( ) =>{

            const idProduct = Number(boton.id.split('-').pop())
            carrito.push(productos.find(producto => producto.id === idProduct))
            /* JSON.stringify transforma un array/object a un string  */
            localStorage.setItem('carrito', JSON.stringify(carrito))
            console.log(JSON.parse(localStorage.getItem('carrito')))
        })
    }
}
renderizarProductos()


const btnSave = document.getElementById('btn-save')
btnSave.addEventListener('click', ()=>{
    //Guardar algo en local storage
    localStorage.setItem('random', 'valor random')
})

const btnDelete = document.getElementById('btn-delete')
btnDelete.addEventListener('click' ,() =>{
    //Eliminar algo del localStorage
    localStorage.removeItem('random')
})

//Resetear localStorage

//localStorage.clear()

//leer algo del local storage

/* console.log(localStorage.getItem('random')) */