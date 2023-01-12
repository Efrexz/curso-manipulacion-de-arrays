const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

//primero separamos los atributos y luego aplicamos el flat
let sinFlapMap = users.map(user => user.attributes).flat();
console.log(sinFlapMap);

//con flatMap aplicamos todo junto
let conFlapMap = users.flatMap(user => user.attributes);
console.log(conFlapMap);

//reto Devolver solo las fechas de inicio del calentario en un array

//mi solucion:

// Creamos un objeto que representa dos calendarios con citas programadas
const calendars = {
    primaryCalendar: [
      // Cita 1 en el calendario principal
        {
        startDate: new Date(2021, 1, 1, 15), // 15:00
        endDate: new Date(2021, 1, 1, 15, 30), // 15:30
        title: "Cita 1",
        },
      // Cita 2 en el calendario principal
        {
        startDate: new Date(2021, 1, 1, 17), // 17:00
        endDate: new Date(2021, 1, 1, 18), // 18:00
        title: "Cita 2",
        },
    ],
    secondaryCalendar: [
      // Cita 1 en el calendario secundario
        {
        startDate: new Date(2021, 1, 1, 12), // 12:00
        endDate: new Date(2021, 1, 1, 12, 30), // 12:30
        title: "Cita 2",
        },
      // Cita 2 en el calendario secundario
        {
        startDate: new Date(2021, 1, 1, 9), // 9:00
        endDate: new Date(2021, 1, 1, 10), // 10:00
        title: "Cita 4",
        },
    ],
};

  // Creamos un nuevo array que contiene los valores del objeto calendars
let newArray = Object.values(calendars).flat();

  // Aplicamos una función que extrae la fecha de inicio de cada objeto de cita y aplanamos el resultado en un nuevo array.
  //aqui no es necesario el flat map porque ya aplicamos el flat arriba pero bueh jajajaja. como aplica primero el map y luego el flat es que se complica
let final = newArray.flatMap((element) => element["startDate"]);

  // Mostramos el resultado final en la consola
console.log(final);

//otras soluciones 

const rtaReto = Object.values(calendars).flat().map(item => item.startDate);
console.log(rtaReto);