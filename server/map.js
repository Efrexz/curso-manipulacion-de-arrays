let numeros = [1,2,3,4,5,6,7];

let numerosx2 = numeros.map(numero => numero *2);

console.log(numerosx2);
console.log(numeros);


//otro 

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

let nuevoArray = orders.map(orden => orden.total);
console.log(nuevoArray);



//playground 


let lista = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    }
    ];

        let newArray = lista.map(element => {
            return {
                ...element,
                taxes : parseInt(element.price * 0.19)
            }
    });

  console.log(newArray);
  console.log(lista);
  


  function addNewAttr(array) {
    return array.map(element => {
        return {
        ...element,
        taxes: parseInt(element.price * 0.19),
        }
    }
)
}