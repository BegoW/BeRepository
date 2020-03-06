/*
Main para Arrays - permiten almacenar múltiples valores ordenados, y distintos tipos de datos
*/

console.log('Entro en mainarrays');

// buena práctica - Array = frutas
const frutas = ['kiwi', 'kaki', 'manzana'];
// buena práctica - Array = varios
const varios = [22, 'dato', true];

// comprobar si son Arrays
console.log(frutas instanceof Array);
console.log(Array.isArray(varios));

//que hay en la posición (que se indica) del Array varios
console.log(varios[0]); //22
console.log(varios[1]); //dato

//almacenamos en la variable lon el número de elementos del Array varios
const lon = varios.length;
console.log(lon); //3
console.log(varios.length); //3

//Iteramos el contenido frutas con for clásico
const lonf = frutas.length; 
//for (let i = 0; i < frutas.length; i++) - sino queremos declarar una variable para almacenar la longitud de array 
for (let i = 0; i < lonf; i++) {
  console.log(frutas[i]);
}

//Iteramos el contenido del array varios con for...of
for (let dato of varios) {
  console.log(dato);
}



//ATRIBUTOS
console.log('Atributo lenght, el número de elementos (longitud) es: ' + varios.length);
console.log('Atributo lenght' + `${lonf}`);
console.log('Atributo ToString - convierte el array a string: ' + frutas.toString());
console.log('Atributo Join - convierte un array en string utilizando como separador el pasado por parámetro "*": ' + frutas.join(' * '));

//IMPORTANTE - Método push: añade un nuevo elemento al final del array y retorna la longitud.
console.log(varios.push('11')); //4 elementos tendrá ahora
console.log(varios);
console.log(varios.push('false')); //5
console.log(varios);

//Método unshift: añade un elemento al principio y retorna el número de elementos.
console.log('Atributo unshift - añadimos limón al ppio: ' + frutas.unshift('limón'));
//Método pop: elimina el último elemento de un array y lo retorna.
console.log('Atributo pop - eliminamos el último elemento: ' + varios.pop());
//Método shift: elimina el primer elemento de un array y lo retorna.
console.log('Atributo shift - eliminamos el primer elemento: ' + varios.shift());
//Método delete: borra elementos de un array, pero dejando "agujeros" (holes) en el array.
delete frutas[0];
console.log('Atributo delete-Hemos borrado el elemento [0] de array y dejado el hueco: ');
console.log(frutas);

/* IMPORTANTE - Método splice: 
permite añadir elementos, eliminar elementos o ambas operaciones al mismo tiempo. 
El método devolvería los elementos eliminados (si los hubiera). 
Posee los siguientes parámetros:
1ºparámetro = posición del elemento en el que se comenzará a añadir o eliminar elementos.
2ºparámetro = define el número de elementos que serán eliminados. Si el valor es 0,
entonces ningún elemento del array es eliminado.
El 3º parámetro y los siguientes son los elementos a añadir a partir de la posición definida en el primer parámetro.
*/
//ELIMINAR elementos
const verduras = ['tomate', 'cebolla', 'ajo', 'apio', 'calabacín', 'lechuga', 'patata'];
//(3, 2) a partir de la posición 3 (primer parámetro), eliminaremos 1 valor (segundo parámetro)
console.log(verduras.splice(3, 1)); //eliminamos 'apio'
console.log(verduras);

console.log(verduras.splice(1, 0)); //no eliminamos ninguno porque hemos puesto 0 en el segundo parámetro
console.log(verduras);

console.log(verduras.splice(0, 1)); //eliminamos tomate
console.log(verduras);
//IMPORTANTE - SINO ESPECIFICAMOS EL 2º parámetro se borra TODO a partir de la posición del primer parámetro
console.log(verduras.splice(3)); //eliminamos TODO A PARTIR DE LA POSICIÓN 3=lechuga 
console.log(verduras);

//AÑADIR
const coches = ['Audi', 'Seat'];
coches.push ('Fiat', 'BmW'); //añadimos 2 elementos al final array
console.log(coches.push('Renault')); // imprime por pantalla = 5
console.log(coches); 

//Hasta aquí tenemos el array así: ["Audi", "Seat", "Fiat", "BmW", "Renault"]

//Método splice - ELIMINAR Y AÑADIR (1ºElimina y después añade)
console.log(coches.splice(2, 0, 'Kia')); //a partir de la posición 2, no borramos nada posición 0, añadimos 'Kia'
//["Audi", "Seat", "Kia", "Fiat", "BmW", "Renault"]
console.log(coches);

console.log(coches.splice(2, 2, 'Opel')); //A partir de la posición 2ª, borramos 2 elementos = ["Kia", "Fiat"] y en esa posición metemos 'Opel'
//["Audi", "Seat", "Opel", "BmW", "Renault"]
console.log(coches);

console.log(coches.splice(0, 2, 'Chebrolet', 'Mercedes')); //eliminamos ["Audi", "Seat"]
//["Chebrolet", "Mercedes", "Opel", "BmW", "Renault"]
console.log(coches);

//Método concat: une arrays. Este método puede aceptar tantos parámetros como arrays quieran ser concatenados.
const myarrays = coches.concat(varios); // COMO CONCATENAR VARIOS ARRAYS
console.log(myarrays);

/*
Método slice: extrae un fragmento de un array y lo convierte en un nuevo array. Posee los siguientes parámetros:
El primer parámetro es la posición del primer elemento del nuevo array.
El segundo parámetro es la posición del último elemento del nuevo array (si este parámetro es omitido, entonces el último elemento del nuevo array es el último elemento del array original).*/

//Método reverse: invierte un array
console.log(coches);
console.log('Orden invertido del array coches: ' + coches.reverse());


//Método Math.max y Math.min: calcula el valor mínimo y máximo de un array.
//Math.max y Math.min no aceptan arrays como parámetros
console.log(Math.max(40, 100, 1, 5, 10)); //100
console.log(Math.min(40, 100, 1, 5, 10)); //1

/*
Método sort: ordena un array de forma alfabética.
Este método no funciona para números enteros. Para ordenar números enteros es necesario que el método sort reciba un callback de comparación con dos parámetros (a y b, por ejemplo). El callback será ejecutado múltiples veces por JavaScript utilizando internamente un algoritmo de ordenación, donde a y b tomarán los diferentes valores del array, de tal forma que:
Si se quiere una ordenación ascendente, entonces debe retornarse a - b
Si se quiere una ordenación descendente, entonces debe retornarse b - a*/

console.log(coches);
//["BmW", "Chebrolet", "Mercedes", "Opel", "Renault"]
console.log(coches.sort());

console.log(varios); //["dato", true, "11"]
console.log(varios.sort()); //["11", "dato", true]


/*
// ordenación ascendente de números enteros mediante una función de comparación
const puntos = [40, 100, 1, 5, 25, 10];
// función para ordenación ascendente
const puntos2 = puntos.sort((a, b) => a - b);
// [1, 5, 10, 25, 40, 100]
console.log(puntos2);
// esta forma de ordenar elementos es muy potente puesto que pueden ordenarse
también objetos a partir de alguna propiedad
const coches = [
{ type: 'Volvo', year: 2016 },
{ type: 'Saab', year: 2001 },
{ type: 'BMW', year: 2010 }
];
// función para ordenar ascendentemente por la propiedad year
const cochesOrdenados = coches.sort((a, b) => a.year - b.year);
// [{type: "Saab", year: 2001}, {type: "BMW", year: 2010}, {type: "Volvo", year:
2016}]
console.log(cochesOrdenados);

*/

//alert('Permito terminar');