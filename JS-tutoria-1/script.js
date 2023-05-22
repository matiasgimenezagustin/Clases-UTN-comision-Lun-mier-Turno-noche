
/* Crear una condicional que verifique que la edad sea mayor o igual a 18, en caso de ser asi decir por consola "es mayor de edad" sino decir "es menor de edad"

Crear un programa que solicite al usuario un precio, eso guardarlo en una variable. Si el precio es inferior a 3000 entonces decir por consola "es barato", si el precio es superior a 3000 decir por consola es caro

Solicitar al usuario 3 números y verificar cuál es el mayor de los 3 (nos muestra el numero mayor por consola)

Verificamos si el número es positivo, negativo o cero (nos dira por consola a que categoria pertenece)

Verificamos si la edad está en el rango de 18 a 65 años, si se cumple la condicion, se dira por consola Esta en edad laborable
 */


/* 
EJERCICIO 1): 
- Crear una condicional que verifique que la edad sea mayor o igual a 18, en caso de ser asi decir por consola "es mayor de edad" sino decir "es menor de edad"

*/

/* 
let edad = prompt('ingrese la edad')

if(edad >= 18){
    console.log('es mayor de edad')
}
else{
    console.log('es menor de edad')
}
 */

/* 
EJERCICIO 2):
-Crear un programa que solicite al usuario un precio, eso guardarlo en una variable. Si el precio es inferior a 3000 entonces decir por consola "es barato", si el precio es superior a 3000 decir por consola es caro

*/


/* let precio = prompt('ingrese precio')

if(precio < 3000){
    console.log('es barato')
}
else{
    console.log("es caro")
} */


/* 
EJERCICIO 3):
-Solicitar al usuario 3 números y verificar cuál es el mayor de los 3 (nos muestra el numero mayor por consola)
*/

/* let a = prompt( "ingrese un numero")
let b = prompt( "ingrese un numero")
let c = prompt( "ingrese un numero")

if(a >= b && a >= c){
    console.log('El numero mayor es ' + a)
}
else if(b >= a && b >= c){
    console.log('El numero mayor es ' + b)
}
else if( c >= b && c >= a ){
    console.log("El numero mayor es " + c)
} */
/* else if (a == b && a == c){
    console.log('Todos son iguales')
}
else if ( a == b){
    console.log('El numero ' + a + ' y el numero ' + b + ' son iguales')
}
else if ( b == c){
    console.log('El numero ' + b + ' y el numero ' + c + ' son iguales')
}
else if ( a == c){
    console.log('El numero ' + a + ' y el numero ' + c + ' son iguales')
} */

/* let A = 1
let B = 2
let C = 3
if (A > B) {

    if (A > C) {
        console.log(A)
    } else{
    console.log(C)
    }
}
else if ( B > C){
    console.log(B)
}
else{
    console.log(C)
} */

/* 
EJERCICIO 4):
- Verificamos si el número es positivo, negativo o cero (nos dira por consola a que categoria pertenece)

*/


/* let numero = prompt('ingrese un numero ')

if(numero > 0){
    console.log("El numero es positivo")
}
else if(numero < 0){
    console.log('El numero es negativo')
}
else if( Number(numero) === 0){
    console.log('El numero es 0')
}
else{
    console.log('ERROR: numero ingresado no es valido')
} */


/* 
EJERCICIO 5):
- Verificamos si la edad está en el rango de 18 a 65 años, si se cumple la condicion, se dira por consola Esta en edad laborable
*/
/* 
let edad = prompt('Ingrese la edad')

if(edad >= 18 && edad <= 65){
    console.log('Esta en edad laborable')
}
else{
    console.log('No esta en edad laborable')
} */



