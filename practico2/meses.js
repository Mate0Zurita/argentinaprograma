const readlineSync = require('readline-sync');
const mes = readlineSync.question("Tendía usted la amabilidad de indicarme el mes utilizando los numeros del 1 al 12? ");

//lo habia hecho con switch y perdi al archivo jaja, pero con lo que charlamos el sabado entendi que era mas practico hacerlo con listas

let l_meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let l_dias = [31,28,31,30,31,30,31,31,30,31,30,31];
// no me queda claro si es mejor meterlo todo en una sola lista anidada 

console.log("La cantidad de dias del mes de %s es %d",l_meses[mes-1],l_dias[mes-1]);
