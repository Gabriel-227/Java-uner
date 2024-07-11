//Para inicializar una variable utilizo la palabra recervada Let
// Declaracion, donde declaro el nombre de la variable
// Asignacion, donde le asigno un valor a la varible
// Podemos utilizar declaracion y asignacion en la misma sentencia
let miApellido = "Nuñez";

// Podemos utilizar declaracion y asignacion en la misma sentencia
let miNombre = "Gabriel";
console.log("Mi nombre es: ",miNombre);

miNombre = "Gabriel Nuñez";
console.log("Mi nombre es: ",miNombre);

// Declaracion de variable constante se utiliza palabra reservada const 
const Mi_Edad = 38;
// Si asigno un nuevo valor a un const obtengo un error
//Mi_Edad = 39
console.log("Mi edad es de: ",Mi_Edad);

// No puede declarar en un mismo segmento de codigo dos veces el mismo nombre de variable
//let miNombre = Gaspar; 

// Se puede declarar varias variables un una sentencia seprandolas por coma
// Sin embargo esto no esta considerado como una buena practica
let miCiudad = 'Crespo', miProvincia = 'Entre Rios', miPais = 'Argentina';
console.log(miCiudad + ', mi provincia ' + miProvincia + ', mi pais ' + miPais)

// Lo siguiente no es importante para la materia pero si para los curiosos
// La diferencia entre var y let, el scope de var es global mientras que let vive el segmento que fue declarado
var hoy = 'Viernes';

// Al nombrar variables puedo utilizar numeros y letras.
let unaVariable123 = 0;
// Lo que no puedo hacer es comenzar con numeros
// let 4Unnumero54545 = 0;
let NUMERO_PI;

// Puedo utilizar el signo $ o el guien bajo. Tambien caracteres no latinos, como el ideografico chino, el cirilico
let $mi_nombre;

// Los nombres de la variables no pueden estar separados por espacio
// let mi nombre;
// Los nombre de variables son case sensitive distingue mayuscula de minuscula
let minombre = 'Otro nombre;';

// Evitar nombre no descriptivos en la declaracion
let variable, numero, a, b, auxiliar;

// UNA MUY MALA PRACTICA ES REUTILIZAR VARIABLES
miNombre = 45;
let resultado = 45;

/*
Practica 3
Examina el siguiente codigo:

const inicioClases = '03.05.2024';
const tiempoTranscurrido = unaFuncion(inicioClases);

*/