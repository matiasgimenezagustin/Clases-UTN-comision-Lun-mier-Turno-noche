/* 
DRY : Dont repeat yourself
*/

/* 
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo') 
*/

//BUCLE FOR
/* let contadorX = 8
for(let i = 10; i <= 150; i = i + 2){
    console.log(i + "° pasada")
    console.log('hola mundo')
} */

/* 
1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
4)Imprime los números del 10 al 1 en orden inverso
*/

/* for(let i = 10; i >= 1; i = i - 1){
    console.log(i)
} */
/* for (let i = 1; i <= 10; i = i + 1) {

    console.log(i)

} */
/* 
for(let i = 2; i <= 20; i = i + 2){
    console.log(i)
}
 */

/* for(let i = 1; i <= 19; i = i + 2){
    console.log(i)
} */
/* for(let i = 1; i <= 20; i = i + 1){
    if(i % 2 == 0){
        console.log(i + ' es par')
    }else{
        console.log(i + ' es imapar')
    }
} */
/* Si escriben pepito quiero que el bucle se corte */

/* for(let i = 1; i <= 10; i = i + 1){
    let nombre = prompt('ingrese nombre')
    if(nombre === 'pepito'){
        break
    }
} */

/* Quiero que hagas un contador que vaya del 1 al 10 pero se saltee el 5 y el 6 */

/* 
for(let i = 1; i <= 10; i = i + 1){
    if(i === 5 || i === 6){
        continue
    }
    console.log(i)
} */

/* 
BUCLE WHILE 
*/

/* let decision = prompt('Ingrese SI para continuar el programa')
while(decision === 'SI'){
    alert('El programa se esta ejecutando')
    decision = prompt('Ingrese SI para continuar el programa')
}
 */
/* Crear una calculadora:
Solicitaremos al usuario una decision 'Si desea usar la calculadora escriba SI'
Luego si se presiono SI, se solcitara una operacion y 2 numeros, y se resolvera segun la operacion correspondiente (+ o -)
Si la operacion no existe entonces se dira 'ERROR: operacion no valida'
Al finalizar el programa de la calculadora se volvera a solictar una decision que dira 'Escriba SI si desea usar la calculadora

Se dira 'La calculadora ha finalizado' en caso de haberse acabado el bucle while
OPCIONAL: Agregar las operaciones * y /
OPCIONAL: La operacion ademas de ser + debera funcionar con su formato texto "sumar", lo mismo con el resto de operaciones
MERITORIO: Se validara que los numeros ingresados sean numeros previo al if de las oepraciones
 */

/* let operacion = prompt('ingrese la operacion')
let numero1 = Number(prompt('ingrese un numero'))
let numero2 = Number(prompt('ingrese un numero'))
if(operacion === '+'){
    alert('El resultado de ' + numero1 +  ' + ' +  numero2 + ' es: ' + (numero1 + numero2))
}
 */
/* let desicion = prompt('si quiere usar la calcu escriba SI')

while(desicion === 'SI') {
    let operacion = prompt('ingrese la operacion')
    let numero1 = Number(prompt('ingrese un numero'))
    let numero2 = Number(prompt('ingrese un numero'))
    if (operacion == '+') {
        alert('El resultado de ' + numero1 + ' + ' + numero2 + ' es ' + (numero1 + numero2))
    }
    else if (operacion == '-') {
        alert('El resultado de ' + numero1 + ' - ' + numero2 + ' es ' + (numero1 - numero2))
    }
    else {
        alert('ERROR: operacion no valida')
    }
    desicion = prompt('si quiere usar la calcu escriba SI')
} */
/* 
else {
    alert('no la uses entonces')
} */

/* METODOS DE STRING */
/* 
let nombre = 'pepe'

console.log('La cantidad de caracteres del string ' + nombre + ' es: ' + nombre.length) */


/* let mensaje = prompt('ingrese un mensaje')

if(mensaje.includes('tontito') || mensaje.includes('bobo')){
    console.log('Hemos detectado que tu respuesta tiene contenido que puede ser ofensivo, Estas seguro que deseas mandar este mensaje?')
}else{
    console.log('mensaje enviado con exito')
} */


/* let mensajeCodificado = "I'm%20interested%20in%20your%20car%20for%20sale"

let mensajeDecodificado = mensajeCodificado.replaceAll('%20', ' ')
console.log("EL mensaje decodificado es: " +  mensajeDecodificado) */


/* let rating = 5

console.log('El bar pepesito tiene ' + '⭐'.repeat(rating)) */


let mensaje = 'hola mundo' //Hola mundo

console.log(mensaje[0])

let resultado = mensaje[0].toUpperCase()

/* console.log(mensaje[0])
console.log(mensaje[1])
console.log(mensaje[2])
console.log(mensaje[3])
console.log(mensaje[4]) */

for(let i = 1; i < mensaje.length; i = i + 1){
    resultado = resultado + mensaje[i]
    console.log(resultado)
}

console.log(resultado)