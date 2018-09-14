const add = ( x ) => ( y ) => x + y;
const inverse = ( x ) => x * (-1);
const subtract = ( x ) => ( y ) => add(x)(inverse( y ));

console.log(add(5)(2));
console.log(subtract(5)(2));