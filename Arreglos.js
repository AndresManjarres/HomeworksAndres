/*ForEch es un remplazo de los ciclos for y whie 
para recorrer arreglos.*/
const numeros = [1, 2, 3, 4, 5]
let suma = 0;

numeros.forEach((item) => {
  suma += item; 
})
console.log(`${suma}`)

/*Every: Permite comprobar si todos y cada uno de los 
elementos de un array cumplen con la condicion 
que se especifique. */
const letters = ["a", "b", "c", "d"]

let res = 0;
letters.every((letters)=>{
  res = letters.length === 1
});
console.log(res)

/*Some: Al menos uno de los elementos del array, 
cumplen dicha condición definida*/
let ressome = 0;

letters.some((element) => {
  ressome = element.length == 2
})
console.log(ressome)

/*Map: Su objetivo es devolver un nuevo array donde
cada uno de sus elementos será lo que devuelva la función 
callback por cada uno de los elementos del array original*/

const names = ["Andres", "Juan", "Pedro"]

const namesSizes = names.map((name) => name.length);

console.log(namesSizes)

/*Filter: Nos permite filtrar los elementos de un array 
y devolver un nuevo array con sólo los elementos que queramos.*/

const filterName = names.filter((name) => name.startsWith("P"))

console.log(filterName)

/*Flat y FlatMap: Se trata de un método que revisa todos
los elementos del array en busca de arrays anidados, y 
los aplana hasta el nivel level indicado por parámetro.*/

const values = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

let resFlat = values.flat(2);
//values.flat(infinity) para aplanar cantidad infinita de nivels
console.log(resFlat)

/*Con flatMap podemos aplicar una condicion al aplanamiento*/
const valuesflatMap = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

let resflatMap = values.flatMap(element => Array.isArray(element) ? element.length : 1 );

console.log(resflatMap)

/*Find findIndex: Se trata de un método que revisa todos los 
elementos del array en busca de arrays anidados, y los aplana 
hasta el nivel level indicado por parámetro. Ten en cuenta que 
tambien existen el metodo finLast y findLastIndex que buscan 
de derecha a izquierda*/

const frutas = ["Pera", "Banano", "Fresa", "lulo", "Manzana"]

resfind = frutas.find((x) => x.length == 4)
resfindIndex = frutas.findIndex((x) => x.length == 4)

console.log(resfind, resfindIndex)

/*Reduce: se encarga de recorrer todos los elementos del array, e 
ir acumulando sus valores (o alguna operación diferente) y sumarlo todo, 
para devolver su resultado final. Aparece first, second, iteration y array*/

/*En la primera iteración, first contiene el valor del primer 
elemento del array y second del segundo. En siguientes iteraciones, 
first es el acumulador que contiene lo que devolvió el callback 
en la iteración anterior, mientras que second es el siguiente 
elemento del array, y así sucesivamente. Tambien existe reduceRight()*/

const sumatoria = [10, 15, 20, 25, 30, 90]

let ressuma = sumatoria.reduce((first, second) => {
  console.log(`F=${first} S=${second}`);
  return first + second;
});

console.log(`La suma total de los elementos del array es: ${ressuma}`)