// a)
let n1=5;
let n2=6;
let n3=9;
let n4=5;

// b)
let suma = n1+n2; 
// vale 11

// c) 
let resta = n3-n4; 
// vale 4 

// d) 
let resultadoFinal = suma*resta; 
// tal que quede 44 = 4*11

// e)
let esPar = (resultadoFinal % 2 === 0);
// el % significa que va a dar el resto de esa división

// f)
console.log("Mis variables iniciales fueron: %d, %d, %d y %d. La respuesta a verificar si el resultado final es par es: %s", n1, n2, n3, n4, esPar);
// use %d pero podría haber sido %i. Usé %s para el booleano.