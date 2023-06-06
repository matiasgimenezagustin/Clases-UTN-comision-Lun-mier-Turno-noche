/* DOM = Document Object Model   */


/* console.dir(document)

const tituloHTML = document.querySelector('.titulo')

let nombre = prompt('decime tu nombre')

tituloHTML.innerText = 'Hola ' + nombre */

/* const containerHTML = document.querySelector('#container')

const usuario = {
    nombre: 'pepe',
    apellido: 'grillo',
    edad: 33
} */

/* containerHTML.innerHTML = `
<div>
    <h2>${usuario.nombre} ${usuario.apellido}</h2>
    <span>
        <b>Edad:</b>${usuario.edad}
    </span>
    <hr>
</div>`
 */


/* Acumular */
/* containerHTML.innerHTML = containerHTML.innerHTML + `
    <div>
        <h2>${usuario.nombre} ${usuario.apellido}</h2>
        <span>
            <b>Edad:</b>${usuario.edad}
        </span>
        <hr>
    </div>` */


/* const usuarios = [
    {
        nombre: 'pepe',
        apellido: 'grillo',
        edad: 33
    },
    {
        nombre: 'juan',
        apellido: 'Sanchez',
        edad: 67
    },
    {
        nombre: 'lucas',
        apellido: 'Perez',
        edad: 70
    },
    {
        nombre: 'Vicente',
        apellido: 'Montes',
        edad: 30
    }
]


usuarios.forEach((usuario) =>{
    containerHTML.innerHTML = containerHTML.innerHTML +  `
    <div>
        <h2>${usuario.nombre} ${usuario.apellido}</h2>
        <span>
            <b>Edad:</b>${usuario.edad}
        </span>
        <hr>
    </div>`
})

for(const usuario of usuarios){
    containerHTML.innerHTML = containerHTML.innerHTML +  `
    <div>
        <h2>${usuario.nombre} ${usuario.apellido}</h2>
        <span>
            <b>Edad:</b>${usuario.edad}
        </span>
        <hr>
    </div>`
} */

const productos = [
    {
        titulo: 'motorola G8',
        precio: 60000,
        stock: 50,
        descripcion: 'lorem Ipsum Dolor',
        id: 1,
        img: 'https://jumboargentina.vtexassets.com/arquivos/ids/747890/Celular-Motorola-Moto-G42-Verde-Atlantico-2-924790.jpg?v=637997493696500000'
    },
    {
        titulo: 'motorola G8',
        precio: 60000,
        stock: 50,
        descripcion: 'lorem Ipsum Dolor',
        id: 2,
        img: 'https://jumboargentina.vtexassets.com/arquivos/ids/747890/Celular-Motorola-Moto-G42-Verde-Atlantico-2-924790.jpg?v=637997493696500000'
    },
    {
        titulo: 'motorola G8',
        precio: 60000,
        stock: 50,
        descripcion: 'lorem Ipsum Dolor',
        id: 3,
        img: 'https://jumboargentina.vtexassets.com/arquivos/ids/747890/Celular-Motorola-Moto-G42-Verde-Atlantico-2-924790.jpg?v=637997493696500000'
    },
    {
        titulo: 'motorola G8',
        precio: 60000,
        stock: 50,
        descripcion: 'lorem Ipsum Dolor',
        id: 4,
        img: 'https://jumboargentina.vtexassets.com/arquivos/ids/747890/Celular-Motorola-Moto-G42-Verde-Atlantico-2-924790.jpg?v=637997493696500000'
    },
]

const containerHTML = document.querySelector('#container')
/* 
productos.forEach(producto =>{
    containerHTML.innerHTML = containerHTML.innerHTML + `
    <div>
        <h2>${producto.titulo}</h2>
        <span><b>Precio:</b>$${producto.precio}</span>
        <br>
        <br>
        <span><b>Stock Disponible:</b> ${producto.stock}</span>
        <br>
        <br>
        <button>Ver detalle</button>
        <hr>
    </div>`
}) */

const renderizarProductos = (productos) =>{
    containerHTML.innerHTML = ''
    productos.forEach(producto =>{
        containerHTML.innerHTML = containerHTML.innerHTML + `
        <div class="productCard">
            <div class='productInfo'>
                <h2>${producto.titulo}</h2>
                <span><b>Precio:</b> $${producto.precio}</span>
                <span><b>Stock disponible:</b> $${producto.stock}</span>
                <button class="btn">Ver detalle</button>
            </div>
            <div class='productImg'>
                <img src=${producto.img} alt=${producto.titulo}>
            </div>
        </div>`
    })
}

const eliminarProducto = (id) =>{
    const posicionProducto = productos.findIndex((producto) => producto.id === id)
    productos.splice(posicionProducto, 1)
    renderizarProductos(productos)

}
renderizarProductos(productos)