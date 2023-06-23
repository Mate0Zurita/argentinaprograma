const readlineSync = require('readline-sync');
const num = readlineSync.question("Queres ver un truco de magia? Pasame un numero entero >:) ");

const numero = Number(num);

let paridad = numero%2;

if(numero>0 && paridad===0) {
    console.log("El numero es positivo y par");
} else if(numero>0 && paridad===1) {
    console.log("El numero es positivo e impar");
} else if(numero===0) {
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo")
}