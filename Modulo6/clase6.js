'use strict'

let edadPermitida = 18;
// let edadPersona = 15; //=prompt('Ingresa tu edad.');
// let decision =Number(edadPersona) >= edadPermitida ? 'Puede ingresar' : 'No puede ingresar');
console.log(Number(edadPersona) >= edadPermitida ? 'Puede ingresar' : 'No puede ingresar');

/*
  Notas libretas:
  NEN -> No entendio nada 0-3
  NAO -> No alconza objetivos 4-5
  AO -> Alcanzo objetivos 6-7
  MB -> Muy bueno 8-9
  E -> Excelente 10
  No aprobo: NEN o NAO
  Aprobo: AO o MB o E
*/

let nota = 8; //=prompt ('Ingrese la nota')
let abreviatura = 'Sin nota';


// if (nota >= 0 && nota <= 3) {
//   abreviatura = 'NEN';
// } else if (nota > 3 && nota <= 5) {
//   abreviatura = 'NAO';
// } else if (nota > 5 && nota <= 7) {
//   abreviatura = 'AO';
// } else if (nota > 7 && nota <= 9) {
//   abreviatura = 'MB';
// } else if (nota > 9 && nota <= 10) {
//   abreviatura = 'E';
// } else {
//   abreviatura = 'ERROR FATAL';
// }

switch (nota) {
  case 0:
    abreviatura = 'NEN';
    break;
  case 1:
    abreviatura = 'NEN';
    break;
  case 2:
    abreviatura = 'NEN';
    break;
  case 3:
    abreviatura = 'NAO';
    break;
  case 4:
    abreviatura = 'NAO';
    break;
  case 5:
    abreviatura = 'NAO';
    break;
  case 6:
    abreviatura = 'AO';
    break;
  case 7:
    abreviatura = 'AO';
    break;
  case 8:
    abreviatura = 'MB';
    break;
  case 9:
    abreviatura = 'MB';
    break;
  default:
    abreviatura = 'ERROR FATAL';
}

let aprobo = 'No se sabemos.';

if (abreviatura == 'NEN' || abreviatura == 'NAO') {
  aprobo = 'No aprobo';
} else if (abreviatura == 'AO' || abreviatura == 'MB' || abreviatura == 'E') {
  aprobo = 'Aprobo';
} else {
  aprobo = 'El valor ingresado no coincidi con ninguna categoria.'
}

console.log('La abreviacion que debe poner en la libreta es: ', abreviatura);
console.log('Aprobó el alumno?: ', aprobo);
// console.log(abreviatura == 'NEN' || abreviatura == 'NAO' ? 'No aprobo, desde ternario' : 'Aprobo desde ternario');


// Arrays

/*
  Lista de comprar:
    -Manzana
    -Batata
    -Tomate
    -Lechuga
*/

const listado = ['Manzana', 'Batata', 'Tomate', 'Lechuga'];
// Modificar listado
listado[2] = 'Salsa de tomate'; // Cambio Tomate por salsa de tomate
// listado = 'Casa'; No puedo redefinir un array
// listado = 5; No puedo redefinir un array
// listado = []; No puedo redefinir un array

// const listado2 = new Array('Mandarina', 'Aceite', 'Yerba');

// console.log(listado);
// console.log(listado2);

// const listadoNumero = [10, 11 , 12];
// const listadoNumero2 = new Array(10); // Comportamiento no deseable, generar un array de 10 elementos vacios

// console.log(listadoNumero);
// console.log(listadoNumero2);

console.log('Que hay en el piso 15', listado[15]); // undefined 

// Que pasa si en vez de sobreescribir quiero agregar un elemento
// listado[4] = 'Mandarina';
// console.log(listado);


let indicador = 1;

listado.push('Mandarina'); // metodo Push agrega un elemento al final del array
console.log(listado[indicador + 2]); // resuelve la operacion y me devuelve el elemento en la posicion 3
listado.unshift('Aceite'); // metodo Unshift agrega un elemento al principio del array

// Propiedad length -> me va a devolver el tamaño del array o vector
console.log(listado.length);

console.log(listado); // Array original

console.log(listado.splice(1, 2)); // Segunda instancia o array diferente con los elemento borrados del Array original
console.log(listado); // Array original menos los elementos