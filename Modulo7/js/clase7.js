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
listado.splice(2, 0, 'Papas');
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
nuevoListado.splice(2, 2);
console.log(nuevoListado);

// Find va a a recibir como parametro una funcion flecha la cual va a retornar el primer valor que cumpla
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