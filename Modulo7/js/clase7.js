'use strict' 

// Metodos mas utilizados de la clase Array
// Push, lo vamos a utilizar para agregar elementos a un array
const listado = ['Manzana', 'Batata', 'Tomate', 'Lechuga'];
console.log(listado);
listado.push('Naranja');
console.log(listado);

// Splice, lo puede utilizar entre cosas para agregar elementos a un array
// Como parametros recibe en primer lugar el index donde se hace la insercion, luego la cantidad de elementos
// a partir del index si se quisiera, y luego el elemento a insertar.
listado.splice(2, 0, 'Papas');// (primer dato es el index, segundo dato es la cantidad de elementos a eliminar, tercer dato es el elemento a insertar)
console.log(listado);

// Concat me permite concatenar dos arrays y guardarlo en nuevo
const limpieza = ['Lavandina', 'Jabon'];
const nuevoListado = listado.concat(limpieza);
console.log(nuevoListado);

// Pop elimina el ultimo elemento de un array y lo devulve
console.log('Remuevo el ultimo elemento', nuevoListado.pop());
console.log('El listado sin el ultimo elemento', nuevoListado)

// Shift elimina el primer elemento de un array y lo devulve
console.log('Remuevo el primer elemento', nuevoListado.shift());
console.log('El listado sin el primer elemento', nuevoListado)

// Splice en tanto se utiliza para eliminar cualquier cantidad elementos a partir de cualquier posicion
nuevoListado.splice(2, 2); // (primer dato es el index, segundo dato es la cantidad de elementos a eliminar)
console.log(nuevoListado);

// Find va a recibir como parametro una funcion flecha la cual va a retornar el primer valor que cumpla
// esa condicion.
console.log(nuevoListado.find((elemento) => elemento == 'Papas'));

// IndexOf me va a devolver el indice del primer elemento que sea igual al que se paso por parametros
console.log(nuevoListado.indexOf('Papas')); //deberia ser un numero positivo o 0
console.log(nuevoListado.indexOf('Auto')); // Si no encuentra el elemento devuelve -1

//LastINdexOf me va a devolver el index del primer elemento que sea igual al que se paso por parametro 
// pero buscando desde el final del array inicio
nuevoListado.push('Papas');
console.log(nuevoListado);
console.log(nuevoListado.indexOf('Papas')); //Esto me devuelve la primer ocurrencia desde el inicio
console.log(nuevoListado.lastIndexOf('Papas'));// Esto me devuelve la primer ocurrencia desde el final
nuevoListado.pop();

// Sort me permite ordenar los elementos de un array de menor a mayor o alfabeticamente
nuevoListado.sort();
console.log(nuevoListado);

// reverse me permite invertir el orden de los elementos de un array
nuevoListado.reverse();
console.log(nuevoListado);

// Array multidimensional un array de una dimension o vector es simil a un edificio donde cada piso puede contener un tipo de dato( primitivo o complejo)
const listadoCompras = ['Harinas', 'Fideos', 'Aceite'];

// Un array de dos dimensiones o matris, va a ser analogo a que dentro de cada piso que hay en el edificio
// tengo por cantidad dedepartamentos. cada uno de los cuales puede almacenar un tipo da dato
const lacteos = ['Leche', 'Yogur', 'Queso'];
const frutas = ['Manzana', 'Pera', 'Naranja'];
const carnes = ['Pollo', 'Cerdo', 'Vaca'];

listadoCompras.push(lacteos, frutas, carnes); // Agrego un array dentro de otro array
console.table(listadoCompras); 
console.log(listadoCompras[4][2]); // Accedo a un elemento de un array dentro de otro array Naranja
console.log(listadoCompras[3][1]);// Yoguurt

// Objetos
let auto = {
    marca: 'Ford',
    modelo: 'Galaxy',
    motor: '1.6',
    color: 'Rojo', 
    asegurado: true,
}

console.log(auto);
console.log('Mi auto es de color', auto['color'])// notacion de corchetes no usar
console.log('El modelo de mi auto es', auto.modelo) // notacion de punto usar

auto.modelo = '1998'; // Actualizo el valor accediendo a la 
// propiedad
console.log('El modelo de mi auto es', auto)

auto.cantidadNeumaticos = 4; // Agrego una nueva propiedad al objeto
console.log('El modelo de mi auto es', auto)

// Ejemplo de practica de array y objetos
/* Crear un objeto llamado persona con tus datos (una persona tiene nombre, apellido y documento) que a su vez contenga un array llamado amigos (un amigo es una persona). Crea tres variables personas, cada una conteniendo un objeto, que este compuesto por tres amigos tuyos. agregar cada una de estas variables al array amigos
Saca el objeto por consola*/

let yo = {
    nombre: 'Gabriel',
    apellido: 'Nuñez',
    documento: '12345678',
    amigos: []
}

let amigo1 = {
    nombre: 'Luciano',
    apellido: 'Cecarocci',
    documento: '12345678',
    amigos: []
}

let amigo2 = {
    nombre: 'Augusto',
    apellido: 'Rodriguez',
    documento: '12345678',
    amigos: []
}

let amigo3 = {
    nombre: 'Cristian',
    apellido: 'Tesari',
    documento: '12345678',
    amigos: []
}

//yo.amigo.push(amigo1);
//yo.amigo.push(amigo2);
//yo.amigo.push(amigo3);
yo.amigos.push(amigo1, amigo2, amigo3); // Agrego los amigos al array de amigos

console.log(yo);

// Bucles 
// While - Mientras
let iterador = 0;
while (iterador < 10) {
    console.log(iterador ++);
}
console.log('Continua el flujo del programa');

//Ejemplo 
const amigos = ['Juan', 'Lucas', 'Esteban', 'Deborah', 'Sofia'];
let esAmigo = false;//Variable de control booleana
iterador = 0;// Variable de control numerica, que lleva la cantidad de vueltas
let nombreIngresado = 'Lucas'; //El nombre a buscar

while (iterador < amigos.length && !esAmigo) {
    if (amigos[iterador] == nombreIngresado) {
        esAmigo = true;
    }
    iterador++;
}   
esAmigo ? console.log('Es amigo') : console.log('No es amigo');


// Do While - Hacer mientras el codigo se ejecute al menos una vez

let correcta = false;// Variable de control booleana
do {
    let contraseña1 = prompt('Ingrese la contraseña');
    let contraseña2 = prompt('Ingrese nuevamente la contraseña');   
    contraseña1 === contraseña2 ? correcta = true : correcta = false;
    correcta ? alert('Contraseña almacenada correctamente'): alert('Las contraseñas no coinciden, intente nuevamente');
}while (!correcta);
