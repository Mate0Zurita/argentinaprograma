const readlineSync = require('readline-sync');
const numero = readlineSync.question("A continuacion escriba cualquier numero real que se le ocurra (es para un experimento): ");

numerito = Number(numero);
// solo por precausión, no me queda claro si el numero es un string.

if(numerito>0) {
    console.log("El numero es positivo");
} else if(numerito<0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}