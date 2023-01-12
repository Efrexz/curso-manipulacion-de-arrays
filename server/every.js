let numbers = [10,23,54,61,51,98,71,26,56,105];

let prueba = numbers.every(number => number <= 100);// todos los elementos de numbers son menores a 100? 

console.log(prueba);

//reto devolver si todos cumplen la condicion de ser menores de 15 años
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 13,
    },
    {
        name: "Santiago",
        age: 18,
    },
    ];

    let prueba2 = team.every(person => person.age <= 15);

    console.log(prueba2);