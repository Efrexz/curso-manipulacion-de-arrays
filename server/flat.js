const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
const rta = matriz.flat(3);
console.log('for', newArray);
console.log('flat', rta);


//reto de simular el flat con recursividad 

const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function flattenArray(arr) {
    // Creamos un nuevo array que se usará para almacenar los elementos aplanados
    const flattened = [];

    // Iteramos sobre cada elemento del array
    for (const item of arr) {
      // Si el elemento actual es un array...
        if (Array.isArray(item)) {
        // ...usamos el operador de propagación (...) para agregar cada elemento del array aplanado al nuevo array
        flattened.push(...flattenArray(item));
        } else {
        // Si el elemento no es un array, simplemente lo agregamos al nuevo array
        flattened.push(item);
        }
    }
    // Devolvemos el nuevo array aplanado
    return flattened;
}

let resultado = flattenArray(matriz2);
console.log(resultado);


