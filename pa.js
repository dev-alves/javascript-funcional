//PA recebe uma função que recebe o resultado de uma outra função
const PA = ( y )=> ( x )=> x + y;
const PArazao2 = PA(2); //( x )=> x + y;

let result = PArazao2(5);
console.log(result);
