const add = (x) => (y) => x + y;
const decrement = (x) => x -= 1;
const mutiply = (x) => (y) => {
    let result = 0;
    let addX = add(x);

    while(y > 0) {
        result = addX(result);
        y = decrement(y);
    }

    return result;
}

const pow = (x) => (y) => {
    let result = 1;
    let multiplyX = mutiply(x);

    while(y > 0) {
        result = multiplyX(result) ;
        y = decrement(y);
    }

    return result;
}

console.log('2 ^ 3', pow(2)(3));
console.log('4 ^ 5', pow(4)(5));
console.log('6 ^ 7', pow(6)(7));
