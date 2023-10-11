const numero = 4;

// Funcion tradiconal
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log(`El número ${numero} es ${esParOImpar(numero)}`);

// Funcion Arrow 
const imparOpar = (numero) => (numero % 2 === 0 ) ?`${numero} es par` : `${numero} es impar`;

console.log(imparOpar(numero))