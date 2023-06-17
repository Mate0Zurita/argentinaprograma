const readlineSync = require('readline-sync');
const edad = readlineSync.question('Hola! Soy la consola de tu computadora :) \n Cual es tu edad? ');

if(edad>=18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menos de edad");
}
