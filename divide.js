const {add, inverse, subtract} = require('./add.subtract-refactoring');
const  multiply  = require('./multiply');

/**
 * Apenas para divisões com valores exatos!
 * @param {*} x 
 */
const divide = (x) => (y) => {

    let subY = subtract(x);
    let result = 0;
    let multiplyY= multiply(y);

    let sub = y;

    while(sub != x) {
        result++;
        sub = multiplyY(result);
    }

    return result;
}

console.log('50 / 10 = ', divide(50)(10)); //2