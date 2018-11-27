const alunos = [
	{ id: 1, nome: 'Victor', media: 10 },
	{ id: 2, nome: 'Heitor', media: 9 },
	{ id: 3, nome: 'Lorena', media: 7.5 },
	{ id: 4, nome: 'Luana', media: 5.5 },
];

const filtragem = ( fn ) => element => fn ( element.media );

const filtroDosAprovados = ( minimoParaAprovacao = 7.5 ) => media => {
	return media >= minimoParaAprovacao;
}

const getAlunoByMedia =  ( fn, mediaAluno ) => ( alunos ) =>
	alunos.filter( filtragem( fn( mediaAluno ) ) );

const getAprovadosMedia8 = getAlunoByMedia( filtroDosAprovados, 8 );

console.log('Alunos aprovados: ', alunos.filter( filtragem( filtroDosAprovados() ) ) );
console.log( '\ngetAprovadosMedia7 >>> ', getAprovadosMedia8( alunos ) );

const peoples = [
	{ id: 1, nome: 'Victor', idade: 22 },
	{ id: 2, nome: 'Cictor', idade: 30 },
	{ id: 3, nome: 'Bictor', idade: 60 },
	{ id: 4, nome: 'Nictor', idade: 87 },
	{ id: 5, nome: 'Lictor', idade: 100 },
	{ id: 6, nome: 'Tictor', idade: 18 },
];


const pattern = ( func ) => ( ini, final ) => func ( ini, final );
const filterPattern = ( ini, final ) => element => element.idade >= ini && element.idade <= final;
const getPeoplesByBetweenYears = ( ini, final ) => ( peoples ) =>
	peoples.filter( pattern(filterPattern( ini, final) ) );

const getPeopleBetween18and50years = getPeoplesByBetweenYears(18, 50);

console.log( ' \n\ngetPeopleBetween18and50years >>> ', getPeopleBetween18and50years( peoples ) );
