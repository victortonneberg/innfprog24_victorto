const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}













/*
//Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//Multiple element
//console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item));


const ul = document.querySelector('.items');

// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/






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


//Ternary operator
const x = 9;

const color = 'green'

switch(color) {
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
        console.log('color is blue');
        break;
        default:
            console.log('color is NOT red or blue');
}


const addNums = num1 => num1 + 5;


console.log(addNums(5, 5));


//Constructor functions

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


//Instantiate
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Victor', 'Smith', '7-4-1981');

//console.log(person1.getBirthYear());
//console.log(person1.getFullName());
//console.log(person1);
//console.log(person2.dob.getFullYear());
console.log(person2.getFullName());
console.log(person1);

*/

