const alumnos = [
    {
        nombre:'maria',
        apellido: 'juana'
    }, 
    {
        nombre: 'lucas',
        apellido: 'Suarez'
    },
    {
        nombre: 'Ivana',
        apellido: 'suarez'
    }
]

/* const numeros = [2, 8, 9, 5] */

//crear una funcion llamada porDos(array) y devuelve un array de numeros multiplicados por 2
//porDos([2, 4, 6])  => [4, 8, 12]

/* Sirve para recorrer un array */
/* alumnos.forEach((alumno, index, array)=> {
    console.log(`${index +1}) Hola me llamo ${alumno.nombre} ${alumno.apellido}`)
    console.log(array)
}) */

/* Crear un array en base a otro array */
/* Map devuelve un array donde cada elemento es el return de la funcion */
/* const nombresCompletos = alumnos.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`
})
console.log(nombresCompletos) */


/* Recorrer el array y por cada elemento decir: USAR TEMPLATE STRINGS */
/* Hola me llamo nombre apellido */




/* alumnos[3].nombre */
alumnos.length

//Objeto literal

/* let nombreUsuario = 'lucas'
let apellidoUsuario = 'Suarez'
let edadUsuario = 310 */
/* const usuario = {
    'nombre': 'lucas',
    apellido: 'Suarez',
    edad: 30,
    'pelo largo': false,
    'tieneAmigos': true,
    amigos: [
        'pepe',
        'juana'
    ]
} 
 */
/* console.log(usuario['pelo largo'])
console.log(usuario) */

/* console.log(
    `
    -Entrevistador: hola ${usuario.nombre} ${usuario.apellido}, cuantos años tenes?
    -${usuario.nombre}: Hola, tengo ${usuario.edad}
    `
 )
 */
/* let index = 0
 for(const alumno of alumnos){
    console.log(
    `
    hola ${alumno.nombre} ${alumno.apellido}
    `
    )
    index = index + 1
}
 */


/* const porDos = (arrayDeNumeros) => {
    return arrayDeNumeros.map((numero) => {
        return numero * 2
    })
}



console.log(porDos([2, 4, 6])) */


/* Mejorar la funcion porDos para que ahora sea la funcion, por(numero, arrayNumeros) 
    por(3, [2, 4, 6])  => [6, 12, 18]
*/


const numeros = [2, 4, 6]

const por = (multiplo, arrayDeNumeros) => {
    return arrayDeNumeros.map((numero) => {
        return numero * multiplo
    })
}

console.log(por(3, numeros))


/* 
1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

26)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

//filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
//['remolacha', 'sorpresa', 'verde']

32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

 */

/* const funcion = (nombre, apellido) =>{
    return nombre + apellido
} */

/* Sirve para recorrer un array */
/* alumnos.forEach((alumno, index, array)=> {
    console.log(`${index +1}) Hola me llamo ${alumno.nombre} ${alumno.apellido}`)

}) */

/* Sirve para recorrer el array y generar un nuevo array en base al recorrido */
/* const nombresCompletos = alumnos.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`
}) */


/* 
1)
- Dado un array de números, escribir una función que calcule la suma de todos los números del array.
 */

/* const sumatoria = ( arrayDeNumeros ) =>{
    let total = 0
    arrayDeNumeros.forEach((numero) => {
        total = total + numero
    })
    return total
}

console.log(sumatoria([8, 8, 8])) */
/* RESULETO CON MAP MALA PRACTICA */
/* const sumatoria = ( arrayDeNumeros ) =>{
    let total = 0
    arrayDeNumeros.map((numero) => {
        total = total + numero
    })
    return total
}

console.log(sumatoria([8, 8, 8])) */

/* 4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.
 */

/* [7, 8] => [8] */

/* 
Si yo paso un array de 8 elementos por un map de cuantos elementos es el array resultante?
RTA: 8
*/

/* const sumaPares = (arrayDeNumeros) => {
    let total = 0
    arrayDeNumeros.forEach((numero) => {
        if (numero % 2 === 0) {
            total = total + numero
        }
    })
    
    return total
}

console.log(sumaPares([7, 8, 8])) */


/* 32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase. */


const calcularLongitudesDeFrases = (arrayDeFrases) =>{
    return arrayDeFrases.map((frase) =>{
        return frase.length
    })
}


console.log(calcularLongitudesDeFrases(['hola', 'como estas?']))