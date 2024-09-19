/* Variabler: let, const

let score;

score = 10;

console.log(score);



//String, numbers, boolean, null, undefined, 


const navn = "John";
const age = 30;

//Konkatinering

//console.log('My name is ' + navn + ' and I am ' + age);
Template strings/literals
const hello= `My name is ${navn} and I am ${age}`;
console.log(hello);


const s = 'technology, computers, it, code';
console.log(s.split(', '))


//Arrays - Variablels that holds mulitple values

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos')
fruits.unshift('strawberries')
fruits.pop()

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));

console.log(fruits);



//Object literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }

}

person.email = 'john@email.com'
console.log(person);

const { firstName, lastName, address: { city }} = person;
console.log(city);


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist',
        isCompleted: false
    }
];

/*For-loop
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

//While-loop
let i = 0;
while(i < 10) {
console.log(`While Loop Number: ${i}`);
i++;
}


// forEach, map, filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text
})
console.log(todoCompleted);


const x = 6;
const y = 11;

if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
} 
*/

//Ternary operator
const x = 11;

const color = x > 10 ? 'red' : 'blue'

console.log(color);