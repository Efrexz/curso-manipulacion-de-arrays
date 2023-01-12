let words = ["hola", "caramelo", "efra", "paralilepipero", "laura"];

let wordFilters = words.filter(word => word.length <= 4);

console.log(wordFilters);

///ejemplo con objetos

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

    let ordersFilters = orders.filter(order => order.delivered && order.total > 200);

    console.log(ordersFilters);

    //buscador de palabras sin importar si es mayuscula o minuscula

    const data = [
        { name: "Nathalie", single: "false" },
        { name: "Yulianny", single: "false" },
        { name: "Gio", single: "false" },
        { name: "Maryu", single: "false" }
        ];

        const searchName = (query) => {
        return data.filter(item => {
            return item.name.toString()
                .toLowerCase()
                .includes(query.toLowerCase())
        })
        }
        console.log(searchName('mar'));