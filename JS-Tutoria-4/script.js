
/* 
fetch('./db.json')
.then((respuesta) =>{
    return respuesta.json()
})
.then((personas) =>{
    console.log(personas)
})


console.log('hola')

 */
/*
10 Minutos

Conectar mediante fetch con una archivo JSON local y cuando reciban la data, ejecutar una funcion llamada 
RenderizarPersonas(listaDePersonas) que nos muestrtre un div con un h2 donde este el nombre y un h3 donde este el apellido

*/

/* 
const container = document.getElementById("container")
const renderizarPersonas = (listaDePersonas) => {
    console.log(listaDePersonas)
    listaDePersonas.forEach(persona => {
        container.innerHTML += `
        <div>
            <h2>${persona.nombre}</h2>
            <h3>${persona.apellido}</h3>
        </div>
        `        
    });
}

fetch('./db.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    renderizarPersonas(data)
}) */



const URL_BASE = 'https://swapi.dev/api/'

fetch(URL_BASE + 'people')
.then(respuesta =>{
    console.log(respuesta)
    
    return respuesta.json()
})
.then(personas =>{
    console.log(personas.results)
})

/* Van a consultar de la SWAPI el siguiente EndPoint
/people (devuelve un objeto donde esta la propiedad results que es un array de objetos con 10 personas)
Generar una funcion que reciba el array y en HTML renderize los datos name (h2) height (span) y mass (span)

*/

