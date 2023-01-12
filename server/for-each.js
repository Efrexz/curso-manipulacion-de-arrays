let numeros = [1,2,3,4,5];

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    console.log(`for ${numero}`);
}

// Vs 

numeros.forEach(numero => console.log(`forEach ${numero}`));

//Reto

