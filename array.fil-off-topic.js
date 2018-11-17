const arrayFill = ( length ) => ( value ) => Array( length ).fill( value );

const array = arrayFill( 5 );

console.log( 'arrayFill >>> ', array( 9 ));