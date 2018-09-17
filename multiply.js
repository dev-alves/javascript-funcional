const {add, inverse, subtract} = require('./add.subtract-refactoring');

const multiply = (x) => (y) => {
    let result = 0;
    const addX = add( y ); //9
    const decrement1 = subtract( x ); // x = 5
    let cont = 0;

    while(decrement1( cont ) != 0) {
        result = addX(result); // 9 + 9 (5x)
        cont++;
    }

    return result;
}

console.log(' 5 x 9 = ', multiply(5)(9));

module.exports = multiply;