let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

// a) 
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: %d",tamañoDeCita);
// imprime: "El tamaño de la cita es: 44"

//b) 
let indice = cita.indexOf(substring);
// Nota menta: marca la posición en la cual coincide un string con otro que lo contenga
console.log("El indice del substring es: %d",indice);
// imprime: "El indice del substring es: 13"
// Nota mental: los índices se cuentan desde el cero.

// c)
let citaRevisada = cita.replace(" en un trigal","");
console.log(citaRevisada);
// Imprime: Tres tristes tigres comen trigo