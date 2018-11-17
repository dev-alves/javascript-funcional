const valor = {id: 1, length: 2};

const chamada = destructuring(valor);

function destructuring( { length }) {
    console.log('valor >>> ', length);
}