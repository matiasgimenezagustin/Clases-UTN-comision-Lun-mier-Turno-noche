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

const carritoHTML = document.getElementById('carrito')

const renderizarCarrito = () =>{
    carrito.forEach(product =>{
        carritoHTML.innerHTML += `
        <div>
            <h2>${product.name}</h2>
            <span><b>Price:</b> ${product.price}</span><br><br>
            <button class='btn-comprar' id='btn-comprar-${product.id}'>Buy</button>
            <hr>
        </div>
        `
    })
}

renderizarCarrito()