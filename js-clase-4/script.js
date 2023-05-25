/* ARRAYS */


/* Es un dato que nos permite guardar una lista de elementos ordenada */


/* const listaDeAlumnos = ['pepe','juan', 'lucas', 'ezequiel', 'pepe']

console.log(listaDeAlumnos[1])

console.log(listaDeAlumnos.length) */

/* listaDeAlumnos[listaDeAlumnos.length] = 'lucas' */

/* Agrega un elemento al final del array*/
/* console.log(listaDeAlumnos.push('yanina')) */

/* Agegrega al inicio de un array */
/* listaDeAlumnos.unshift('Leonel') */

/* Elimina el ultimo y lo devuelve */
/* console.log(listaDeAlumnos.pop()) */

/* console.log(listaDeAlumnos.shift()) */

/* Elimina a juan y a lucas */

/* console.log(listaDeAlumnos.splice(1, 2, 'pepe', 'yanina')) */


/* Averigua la posicion de un elemento en el array */

/* console.log(listaDeAlumnos.indexOf('ulises')) */
/* 
console.log(listaDeAlumnos.lastIndexOf('pepe')) */


/* Eliminar a lucas y remplazar por ulises */

/* 
let posicionDeLucas = listaDeAlumnos.indexOf('lucas')

listaDeAlumnos.splice(posicionDeLucas, 1, 'ulises') 
*/



/* const listaDeJugadores = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga'] */


/* 
Se debera eliminar a Neymar y se agregara al principio del array
Se debera reemplazar a Di Maria por Ronaldo
Se agregara despues de Modric a 'Serre7'
*/
/* 1) 

let posiciondeneymar = listaDeJugadores.indexOf("Neymar")
listaDeJugadores.splice(posiciondeneymar,1)
listaDeJugadores.unshift("Neymar") */

/* //2) Se debera reemplazar a Di Maria por Ronaldo

let posicionDeDimaria = listaDeJugadores.indexOf('Di Maria')

listaDeJugadores.splice(posicionDeDimaria, 1, 'Ronaldo')
 */

/* let posicionModric = listaDeJugadores.indexOf('Modric')
listaDeJugadores.splice(posicionModric, 1, 'Modric', 'CR7') */

/* let posicionModric = listaDeJugadores.indexOf('Modric')
listaDeJugadores.splice((posicionModric + 1),0,'CR7') */



/* const listaDeJugadores = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga', 'Ortega'] */

/* Nostrar por consola a todos los nombres que empiecen con la letra O */

/* for(let i = 0; i < listaDeJugadores.length; i = i + 1){
    if(listaDeJugadores[i][0]  === 'O'){
        console.log(listaDeJugadores[i])
    }
} */


/* const mensajes = [
    'buen dia',
    'todo bien?',
    'no estoy a gusto, bobo',
    'Anda pa alla bobo'
] */
/* Scopes o ambitos */

/* let nombre = 'juan'

if(true){

    let nombre = 'pepe'
    console.log(nombre)
    if(true){
        nombre = 'yanina'
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre) */

/* pepe yanina yanina juan*/

/* mensajes[1] = 'pamela' */
/* mensajes = ['pamela'] */

/* const mensajesOfensivos = [] */

/* for(let i = 0; i < mensajes.length; i = i + 1){
    let mensaje = mensajes[i]
    if(mensaje.includes('bobo')){
        console.log("El mensaje " + mensaje + ' contiene la palabra ofensiva, BOBO')
        mensajesOfensivos.push(mensaje)
    }
}
 */
/* for(let mensaje of mensajes){
    if(mensaje.includes('bobo')){
        console.log("El mensaje " + mensaje + ' contiene la palabra ofensiva, BOBO')
        mensajesOfensivos.push(mensaje)
    }
}
 */
/* 
let palabra = 'pepe'
for(let letra of palabra){
    console.log(letra)
} */

//Funciones
/* 
console.log( 'hola pepe')

 */

/* Declaracion */
/* const crearSaludo = ( nombre = 'natalia', apellido = 'natalia') => 'hola ' + nombre + ' ' + apellido */


//f(x) = 2x + 1
//x = 6   2 * 6 + 1 = 13
//x = 8    2*8 +1 = 17

/* invocacion, llamada, ejecucion */

/* for(let i = 1; i <= 10; i =  i + 1){

    saludar()
} */

/* saludar()
saludar(20, 70)
saludar('ulises', 'sanchez' ) */


/* console.log(crearSaludo('maria', 'sanchez'))
alert(crearSaludo('pepe', 'lopez')) */


//Pasar horas a segundos

/* const transformarHrsEnSeg = (horas) => horas * 60 * 60

console.log("Camine por 3 horas " + '(' +  transformarHrsEnSeg(3) + ' segundos aprox).') */

const capitalizar = (string) => {
    let result = string[0].toUpperCase()
    for(let i = 1; i < string.length; i = i +1){
        result = result + string[i]
    }
    return result
}

/* General la funcion es mayor de edad */

/* const esMayorDeEdad = (edad) => {
    return edad >= 18
} */


/* Generar una funcion llamada esVocal(letra) nos devolvera true o false dependiendo de si es vocal */

/* 1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

2)
Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.

3)
Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.

4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

5)
Mediante el uso del método indexOf y splice, desarrollar una función que reciba un array de strings y un stringEliminar, la misma función nos devolverá un array sin el elemento que se eliminó. En caso de no tener el elemento a eliminar se deberá retornar null.

6)
Dado un array de nombres y un nombreDeLista, se deberá crear una función llamada crearLista que retorne un string con el siguiente formato.

Lista de (nombreDeLista):
juan
pepe
maria 

7)
Dado un array de strings y un stringBuscado, elaborar una función que retorne la cantidad de veces que apareció en el array el stringBuscado.
 */

/* const esVocal = (letra) => {
    return letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" 
} */




const esVocal = (string) => {
    let letra = string
    const vocales = ['a','e','i','o','u']
    for (let i = 0; i <= vocales.length; i++) {
        if (letra === vocales[i]) {
            return true
        } 
    }   
    return false
}


console.log(esVocal('e'))