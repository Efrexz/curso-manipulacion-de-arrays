let numeros = [1,10,20,30,40,50];

let numeroEncontrado = numeros.find(numero => numero === 30);

console.log(numeroEncontrado);

//otro ejemplo con objeto

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
    ];

    let productFind = products.find(product => product.id === "🍔");

    console.log(productFind);