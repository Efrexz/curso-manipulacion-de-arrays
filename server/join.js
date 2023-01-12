const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);


//playgroung 

/*En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).

Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:

title: Un String con el título.
Dentro del cuerpo de la función parseToURL debes escribir tu solución.

Ejemplo 1:

Input: "La forma de correr Python"
Output: "la-forma-de-correr-python"

Ejemplo 2:

Input: "La API para nunca parar de aprender"
Output: "la-api-para-nunca-parar-de-aprender"

Ejemplo 3:

Input: "Curso de arrays"
Output: "curso-de-arrays"*/

//mi respuesta :

function parseToURL(title) {
    let string = title.toLowerCase();
    let rta = string.split(" ").join("-");
    return rta
  }

  //otra respuesta 

  function solution(title) {
	return title.replaceAll(" ", "-").toLowerCase();
}; 