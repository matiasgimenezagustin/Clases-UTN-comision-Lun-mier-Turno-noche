/* Obtenemos un elemento por su ID */

const contenedorHTML = document.getElementById('contenedor')

const btn = document.getElementById('btn-create-h1')
const renderizarNombres = ()=>{
    contenedorHTML.innerHTML = ''
    nombres.forEach(nombre =>{
        contenedorHTML.innerHTML += `<h2>${nombre}</h2>`
    })
}

const nombres = ['pepe', 'juan', 'lucas']
const inputHTML = document.getElementById('input')
btn.addEventListener('click', ()=>{
    const nombreEliminar = inputHTML.value
    const indiceDelNombre = nombres.indexOf(nombreEliminar)
    nombres.splice(indiceDelNombre, 1)
    renderizarNombres()
})
renderizarNombres()