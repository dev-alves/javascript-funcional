const fn = element => element.nome === 'Heitor'


//includes
const arr = [ 'Victor', 'Heitor' ]

const obj = [ 
    { id: 1, nome: 'Victor' },
    { id: 2, nome: 'Heitor' } 
];

const resultado = arr.includes( 'Heitor' );
console.log(resultado); //true

const resultadoDois = obj.includes( { id: 1, nome: 'Victor' } );
console.log(resultadoDois); //true


//find
const findresult = obj.find( element => element.nome === 'Heitor' ) 
console.log(findresult); //{ id: 2, nome: 'Heitor' } 

//findIndex
const findIndexResult = obj.findIndex( fn )
console.log(findIndexResult);

const findByField = ( field ) => ( value, list ) => 
    list.find( element => element[ field ] === value );

const findByNome = findByField('nome');
console.log('findByNome >>> ', findByNome( 'Victor', obj ));

//fluent interface
const fluent_interfaceFindByNome = ( value ) => ({
    in: ( list ) => findByField( 'nome' )( value, list ) 
})
console.log('fluent_interfaceFindByNome >>> ', fluent_interfaceFindByNome( 'Heitor' ).in( obj ));


//filter