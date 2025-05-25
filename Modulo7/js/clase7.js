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