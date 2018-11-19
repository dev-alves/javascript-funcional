//criando arrays
const criandoArray = ( length, criacao ) => Array.from( { length }, criacao );
const somenteDois = () => 2;

console.log('Criando arrays >>> ', criandoArray( 5, somenteDois ));

//recriando função
const REFATORANDO_criandoArray = ( criacao ) => ( length ) => 
    Array.from( { length }, criacao );

console.log('criandoArray2 >>> ', REFATORANDO_criandoArray( somenteDois)(7) );

const tamanhoCinco = () => 5;
const somentePares = ( v, i ) => ( i === 0 ) ? i + 2 : i + ( i + 2 );
const somenteImpares = ( v, i ) => ( i ===0 ) ? i + 1 : i + ( i + 1 );

const arraySomenteComCincoPares = REFATORANDO_criandoArray( somentePares );
const arraySomenteComCincoImpares = REFATORANDO_criandoArray ( somenteImpares );

console.log('arraySomenteComCincoPares >>> ', arraySomenteComCincoPares(tamanhoCinco()));
console.log('arraySomenteComCincoImpares >>> ', arraySomenteComCincoImpares(tamanhoCinco()));

//refatoração
const criandoArrayPatternCom = ( criacao ) => ({
    com: REFATORANDO_criandoArray( criacao )
})

console.log('criandoArrayPatternCom >>> ', criandoArrayPatternCom(somentePares).com(tamanhoCinco()));

const criandoArrayComEObter = ( fn ) => {
    return {
        comTamanho: ( tam ) => {
            result = REFATORANDO_criandoArray ( fn ) ( tam );

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

//refatorando
const _get = ( arr ) => ( ...pos ) =>
    ( pos.length === 1 )
    ? arr [ pos ]
    : arr.slice( ...pos )

const REFATORADO_criandoArrayComEObter = ( fn ) => {
    return {
        comTamanho: ( tam ) => ({
            get: _get ( REFATORANDO_criandoArray ( fn ) ( tam ) )
        })
    }
}


console.log('REFATORADO_criandoArrayComEObter >>> ', REFATORADO_criandoArrayComEObter( somentePares )
    .comTamanho( 10 )
    .get( 0, 3 ));


//refatorando ainda mais
const _comTamanho = ( fn ) => ( tam ) => ({
    get: _get ( REFATORANDO_criandoArray( fn ) ( tam ) )
}) 

const REFATORADO_criandoArrayComGet = ( fn ) => ({
    comTamanho: _comTamanho ( fn )
})


console.log('REFATORADO_criandoArrayComGet >>> ', REFATORADO_criandoArrayComGet( somenteImpares )
    .comTamanho( 5 )
    .get( 0, 3 ));


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


//refatorando
const _intervalo = ( mutiplicador ) => ( arr ) => ( ...pos ) => 
    ( pos.length === 1) 
    ? ( arr[ pos ]*mutiplicador )
    : arr.slice( ...pos ).map( element => element * mutiplicador );


const _inserirArray = ( mutiplicador ) => ( arr ) => ({
    intervalo: _intervalo (mutiplicador) ( arr )
}) 
const REFATORANDO_operador = ( mutiplicador ) => ({
    inserirArray: _inserirArray( mutiplicador )
})

console.log('REFATORANDO_operador >>> ', REFATORANDO_operador( 5 ).inserirArray( arraysMultiplicacao ).intervalo( 0, 3 ) );


//FUNCIONALLL :DDD
const functionalCriandoArray = ( criacao ) => ( length ) => Array.from( { length }, criacao );
const functionalCriandoArrayCom = ( fn ) => functionalCriandoArray( fn )
const funcionalComTamanho = ( tam, criacao ) => criacao( tam )

const pegar = ( pos, arr ) =>
    ( pos.map )
    ? arr.slice(...pos)
    : arr[ pos ]

console.log('funcional  >>>> ', funcionalComTamanho( 10, functionalCriandoArrayCom( somentePares ) ) );
console.log('funcional refatorado  >>>> ', pegar( [ 1, 4 ], funcionalComTamanho( 10, functionalCriandoArrayCom( somentePares ) ) ) );


//FUNCIONAL P/2 :D
const funcional_intervalo = ( pos, arr ) =>
    ( pos.map )
    ? arr.slice(...pos)
    : arr[ pos ]

const funcional_operador = ( multi, arr ) => arr.slice().map( element => element * multi ); 

console.log( 'funcional refatorado 2x >>> ', funcional_intervalo( [ 0, 3 ], funcional_operador( 5,  [ 1, 2, 3, 5, 6] )  ) );




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
