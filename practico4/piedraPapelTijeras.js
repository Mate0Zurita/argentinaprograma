const readlineSync = require('readline-sync');


function obtenerJugadaComputadora() {
    let n_azar = Math.floor(3*Math.random()); // multiplico por 3 para hacer mas amplio el rango y redondeo siempre para abajo para tener tres intervalos equivalentes en probabilidad: 0,1,2
    let lista = ["piedra","papel","tijeras"];
    return lista[n_azar]; // a partir del numero obtengo un indice para determinar la jugada (que es un string)
}

function obtenerJugadaUsuario() {
    let jugada = readlineSync.question("Elija su jugada. Escriba piedra, papel o tijeras: ");
    while (!(["piedra","papel","tijeras"].includes(jugada))) {
        // niego ese booleano para que solamente frene cuando se ponga un valor de jugada que este en la lista.
        jugada = readlineSync.question("No eligió una jugada válida. Escriba piedra, papel o tijeras");
        // lo ideal seria ponerle tambien una opcion que permita salir sin tener que escribir exactamentente algo, pero traia muchas complicaciones para despues.
    }
    return jugada;
}

function determinarGanador(jugadaCompu,jugadaUsuario) {
    let pC; // puntos auxiliares de la Computadora
    let pU = 1; // puntos auxiliares del Usuario
    
    switch(jugadaUsuario) {
        case "piedra":
            lista1 = ["tijeras","piedra","papel"];
            pC = lista1.indexOf(jugadaCompu);
            // para evitar anidar switch con codigo repetitivo, creo una lista que permite dar un valor numerico a pC segun la posicion, que esta organizada segun quien gana a quien.
            break;
        case "papel":
            lista2 = ["piedra","papel","tijeras"];
            pC = lista2.indexOf(jugadaCompu);
            break;
        case "tijeras":
            lista3 = ["papel","tijeras","piedra"];
            pC = lista3.indexOf(jugadaCompu);
            break;
    }
    // podria haber ahorrado el switch principal tambien con el mismo metodo de acomodar en listas y usar indices (se ve un poco de codigo repetitivo), pero resultaria mas confuso..
    // Ya con los valores pC y pU puedo compararlos y ver quien gana.
    if (pU > pC) {
        puntajeUsuario += 1; // esto tiene sentido con el Extra 2.
        return "Gana el usuario";
    } else if (pU == pC) {
        return "Empate";
    } else {
        puntajeCompu += 1;
        return "Gana la computadora";
    }
}

/*
Ejercicios 5 y 6

let jugadaCompu = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();

let resultado = determinarGanador(jugadaCompu,jugadaUsuario);

console.log("La computadora eligió: %s.\nEl usuario eligio: %s.\nEl resultado fue: %s.", jugadaCompu, jugadaUsuario, resultado);
*/

// Extra 2:

console.log("Este programa le permite jugar al piedra, papel o tijeras con la computadora.");
let n_rondas = readlineSync.question("Indique el numero de rondas que desea jugar: "); //Quiero suponer que van a poner un numero entero, sino se complica mucho el codigo para contemplar otras variables
n_rondas = Number(n_rondas);

let jugadaCompu;
let jugadaUsuario;
let resultado;

let puntajeCompu = 0; // Son contadores de puntajes que se acumulan en cada ronda
let puntajeUsuario = 0;

let ronda = 1;
while(ronda <= n_rondas) {
    console.log("RONDA %s",ronda);
    jugadaCompu = obtenerJugadaComputadora();
    jugadaUsuario = obtenerJugadaUsuario();

    resultado = determinarGanador(jugadaCompu,jugadaUsuario);
    //La funcion determinarGanador se encarga de modificar puntajeCompu y puntajeUsuario, para no tener que repetir codigo.
    console.log("La computadora eligió: %s.\nEl usuario eligio: %s.\nEl resultado fue: %s.", jugadaCompu, jugadaUsuario, resultado);

    ronda++
}

let resultado_final;

if (puntajeUsuario > puntajeCompu) {
    resultado_final = "Gana el usuario";
} else if (puntajeUsuario == puntajeCompu) {
    resultado_final = "Empate";
} else {
    resultado_final = "Gana la computadora";
}

console.log("RESULTADO FINAL DEL JUEGO: %s %d - %d", resultado_final,puntajeCompu,puntajeUsuario);
