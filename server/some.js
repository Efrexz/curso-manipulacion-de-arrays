let numeros = [1,3,5,7,9];

let prueba = numeros.some(numero => numero % 2 === 0 );

console.log(prueba);

//

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    ];

let prueba2 = orders.some(item => item.delivered);

console.log(prueba2);