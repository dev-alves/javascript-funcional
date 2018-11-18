//criando arrays
const criandoArray = ( length, criacao ) => Array.from( { length }, criacao );
const somenteDois = () => 2;

console.log('Criando arrays >>> ', criandoArray( 5, somenteDois ));

//recriando função
const criandoArrayCom = ( criacao ) => ( length ) => 
    Array.from( { length }, criacao );

console.log('criandoArray2 >>> ', criandoArrayCom( somenteDois)(7) );

const tamanhoCinco = () => 5;
const somentePares = ( v, i ) => ( i === 0 ) ? i + 2 : i + ( i + 2 );
const somenteImpares = ( v, i ) => ( i ===0 ) ? i + 1 : i + ( i + 1 );

const arraySomenteComCincoPares = criandoArrayCom( somentePares );
const arraySomenteComCincoImpares = criandoArrayCom ( somenteImpares );

console.log('arraySomenteComCincoPares >>> ', arraySomenteComCincoPares(tamanhoCinco()));
console.log('arraySomenteComCincoImpares >>> ', arraySomenteComCincoImpares(tamanhoCinco()));

//refatoração
const criandoArrayPatternCom = ( criacao ) => ({
    com: criandoArrayCom( criacao )
})

console.log('criandoArrayPatternCom >>> ', criandoArrayPatternCom(somentePares).com(tamanhoCinco()));

const criandoArrayComEObter = ( fn ) => {
    return {
        comTamanho: ( tam ) => {
            result = criandoArrayCom ( fn ) ( tam );

            return {
                get: ( ( result ) => ( ...pos ) =>
                        ( pos.length === 1 )
                        ? result[ pos ]
                        : result.slice( ...pos )
                )( result )
            }
        }
    }
}

console.log('criandoArrayComEObter >>> ', criandoArrayComEObter( somentePares ).comTamanho( 10 ).get( 0, 3 ));


const arraysMultiplicacao = [ 2, 4, 5, 7, 9 ];
const multiplicacao = 2;

const operador = ( mutiplicador ) => {
    return {
        inserirArray: ( arr ) => {
            return {
                intervalo: ( ( arr ) => ( ...pos ) =>  
                    ( pos.length === 1) 
                    ? ( arr[ pos ]*mutiplicador )
                    : arr.slice( ...pos ).map( element => element * mutiplicador )
                )( arr )
            }
        }
    }
}


console.log( 'operador >>> ', operador( multiplicacao ).inserirArray( arraysMultiplicacao ).intervalo( 0, 3 ) );


//includes()
//retorna true ou false, caso encontre ou não um elemento no array
const array = [ 1, 2, 3, 4 ];

const lista = [
    {id: 1, nome: 'Victor'},
    {id: 2, nome: 'Heitor'}
];

const resultArray = array.includes(2);
console.log('resultArray >>> ', resultArray); //true

const resultLista = lista.includes( { id: 2, nome: 'Heitor'} );
console.log('resultLista >>> ', resultLista); //false
