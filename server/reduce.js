const items = [1,2,4,5,9,13,15];

let itemsReducidos = items.reduce((acumulador, item) => acumulador + item , 0);

console.log(itemsReducidos);

// con for

let acumulador = 0;

for (let index = 0; index < items.length; index++) {
    const element = items[index];
    acumulador += element;
}

console.log(acumulador);


//// otro ejercici      

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
  ];
///ASI HACE LE PROFE 


const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);


const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

  //ASI HICE YO 
let prueba = JSON.parse(JSON.stringify(data));

let objeto2 = {};

data.map(element => {
    if(!objeto2[element.level]){
        objeto2[element.level] = 1;
    }else{
        objeto2[element.level] += 1;
    }
})

console.log(objeto2);
console.log(data);


//RETO DE LA CLASE DEVOLVER LA CANTIDAD QUE SE REPITEN NUMEROS POR RANGO POR EJEMPLO DEL 1 AL 5 ETC

let numeros = [1,2,3,4,5,6,7,8,9,10,2,3,5,4,7,8,1,2,5,8,9];

let objetoReto = {};

let pruebaReto = numeros.map(numero => {
    if(numero <= 5 && numero > 0){
        if(!objetoReto["1-5"]){
            objetoReto["1-5"] = 1;
        }else{
            objetoReto["1-5"] += 1;
        }
    }
    else if(numero >= 6 && numero <= 8){
        if(!objetoReto["6-8"]){
            objetoReto["6-8"] = 1;
        }else{
            objetoReto["6-8"] += 1;
        }
    }else if(numero >= 9 && numero <= 10){
        if(!objetoReto["9-10"]){
            objetoReto["9-10"] = 1;
        }else{
            objetoReto["9-10"] += 1;
        }
    }
})

console.log(objetoReto);