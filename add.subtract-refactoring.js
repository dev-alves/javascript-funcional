const add = ( x ) => ( y ) => x + y;
const inverse = ( x ) => x * (-1);
const subtract = ( x ) => ( y ) => add(x)(inverse( y ));

module.exports = {add, inverse, subtract};
