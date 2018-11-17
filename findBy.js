const obj = [
    { name: 'Victor', email : 'victor.alvesf7@gmail.com' },
    { name: 'Heitor', email: 'heitor@gmail.com' }
];

const findByField = ( field, target ) => ( list ) => 
    list.find( element => element[field] === target);

const find = findByField('name', 'Victor');
console.log(find(obj));



const findByFieldNameInList = ( field, target) => ({
    in: ( list ) => list.find(element => element[field] === target)
});

const result = findByFieldNameInList('name', 'Heitor').in(obj);

console.log(result);