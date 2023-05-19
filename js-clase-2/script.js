//COMPARADORES => Se necesitan a dos para funcionar, siempre devuelven Boolean

//==
//===
//!=
//!==
//>, <, =<

/* console.log('hola' == 'hola') */


//VARIABLES: Es un espacio reservado en la memoria donde podemos guardar un dato, 3 formas de hacerlo

//ES5-
//var NO SE USA
/* 
VAR tiene Hoisting
Inicializacion implicita en undefined
Si no se declara la variable por defecto es var
Se permite la reasignacion
Se permite la redeclaracion
*/
/* var bateria, edad */



/* console.log(apellido) */
/* console.log(bateria)
var bateria = 50
var bateria
bateria = 49
var edad  */
/* nombre = 'pepe' */


//ES6+
//let

/* 
LET no tiene hoisting
Tiene inicializacion implicita en undefined
Podemos reasignar
NO se puede redeclarar LET
*/



/* let nombre
nombre = 'pepe'
console.log(nombre)
 */


//const
/* 
NO tiene hoisting
NO Tiene inicializacion implicita en undefined
NO se puede reasignar
NO se puede redeclarar
*/

/* const PI = 3.14

console.log(PI)
 */



//FUNCIONES NATIVAS

/* console.log('hola')
console.log('chau')
alert('hola')
alert('Chau') */
/* let edad = Number(prompt("Ingrese su edad")) */

/* alert('hola')
alert('buen dia') */
//IF 

/* Somos los guardias de una discoteca, solo podemos dejar pasar a quien tenga mayoria de edad */
/* 
let edad = Number(prompt("Ingrese su edad")) */

/* if(NaN){
    console.log('Puede pasar a la discoteca')
}else{
    console.log("No puede pasar a la discoteca")
} */

/* Verificar que el usuario haya escrito un nombre */
/* let nombre = prompt('Ingrese su nombre')

if(nombre && isNaN(nombre)){
    console.log("Escribio un nombre")
}else{
    console.log('No escribio un nombre')
} */



//OPERADORES LOGICOS

//AND Si la comida esta rica Y el tiempo de espera de cola es menor a media hora, me quedo

/* let estaRicaLaComida = true
let tiempoDeEspera = 90

if(estaRicaLaComida && tiempoDeEspera <= 30){
    console.log('me quedo a comer')
}else{
    console.log('no me quedo a comer')
} */

//Podes ir al ejercito si tenes entre 18 y 35

/* let edad = 27

if(edad >= 18 && edad <= 35){
    console.log('podes ir al ejercito')
} */


//OR voy a comprar, si tengo mas de 1000 pesos O es primer dia del mes
/* let dinero = 300
let diaDelMes = 1
if(dinero >= 1000 || diaDelMes === 1){
    console.log('Voy a comprar')
}
else{
    console.log('No voy a comprar')
} */
//NOT 

/* let estaPrendidaLaLuz = false

estaPrendidaLaLuz = !estaPrendidaLaLuz //true

estaPrendidaLaLuz = !estaPrendidaLaLuz //false */


/* Si la factura es tipo A el iva esta no incluido, si la factura es tipo B el iva esta incluido, si la factura es tipo C el iva esta excento */

/* let tipoDeFactura = prompt('Ingrese el tipo de factura')
if(tipoDeFactura == 'A'){
    console.log('La factura no tiene el iva incluido')
}
else if(tipoDeFactura == 'B'){
    console.log('La factura tiene el iva incluido')
}
else if(tipoDeFactura == 'C'){
    console.log('La factura no tiene IVA')
}
else{
    console.log("ERROR: TIPO DE FACTURA NO VALIDO")
} */