const pow = require('./pow.basic');
const root = require('./root');
const squareRoot = root(2);


const pythagoreanTheorem = (catetoB, catetoC) => {
    return squareRoot(pow(catetoB)(2) + pow(catetoC)(2));
}


console.log('Teorema de Pitágoras: 2 >>> 5 : ', pythagoreanTheorem(2, 5));
