const root = (y) => (x) => Math.pow(x, 1/y);
const raizQuadrada = root(2);
const raizCubica = root(3);
const raizQuarta = root(4);

console.log('raiz quadrada de 9 >>> ', raizQuadrada(9));
console.log('raiz cúbica de 27 >>> ', raizCubica(27));
console.log('raiz quarta de 16 >>> ', raizQuarta(16));
