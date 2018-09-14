const add = require('./add');

const inverse = ( x ) => x * ( -1 );
const subtract = ( x, y ) => add( x, inverse( y ) );

console.log(subtract(5, 9)); // -4

module.exports = subtract;