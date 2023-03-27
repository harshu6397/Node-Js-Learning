// Variables and Data Types

// variable => a container for a value that can change over time. We can create a variable using the var keyword. We can also use let and const keywords to create variables.
// var => we can reassign the value of a variable created using the var keyword and Having Global Scope.
// let => we can reassign the value of a variable created using the let keyword and Having Block Scope.
// const => we cannot reassign the value of a variable created using the const keyword and Having Block Scope.

var name = "John";
console.log(name);

name = "Jane";
console.log(name);

let age = 30;
console.log(age);

age = 31;
console.log(age);

const isMarried = true;
console.log(isMarried);

// Data Types => JavaScript has 7 data types: Number, String, Boolean, Null, Undefined, Symbol, and Object.

// Number => a number without quotes. It can be an integer or a floating point number.
// String => a sequence of characters that is wrapped in single or double quotes.
// Boolean => a logical data type that can have only two values: true or false.
// Null => a special keyword that indicates a null value.
// Undefined => a special keyword that indicates an undefined value.
// Symbol => a data type introduced in ES6. It is used to create unique identifiers for objects.
// Object => a collection of related data.

let year = 2021;
console.log(typeof year);

let firstName = "John";
console.log(typeof firstName);

let isYoung = true;
console.log(typeof isYoung);

let car = null;
console.log(typeof car);

let house;
console.log(typeof house);

let symbol = Symbol();
console.log(typeof symbol);

let person = {
  name: "John",
  age: 30,
};
console.log(typeof person);

// Function In Js

// A function is a block of code that performs a specific task. We can create a function using the function keyword. We can also use arrow function syntax to create a function.

// Function Declaration or Function Statement
function greet() {
  console.log("Hello World");
}
greet(); // Function Call

// Function Expression
const square = function (number) {
  return number * number;
};
console.log(square(5));

// Arrow Function
const cube = (number) => {
  return number * number * number;
};
console.log(cube(5));

// Template Literals
function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("John");

// If Else Statement
const myAge = 30;
if (myAge >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}

// Ternary Operator
const yourAge = 30;
const message = yourAge >= 18 ? "You are an adult" : "You are not an adult";

// Switch Statement
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// For Loop
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

// For In Loop
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let key in obj) {
  console.log(key, obj[key]);
}

// For Of Loop
const arr = [1, 2, 3, 4, 5];
for (let element of arr) {
  console.log(element);
}

// While Loop
let i = 0;
while (i < 5) {
  console.log("Hello World");
  i++;
}

// Do While Loop
let j = 0;
do {
  console.log("Hello World");
  j++;
} while (j < 5);

// Arrays
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Objects
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};
console.log(student.greet());

// Object Destructuring
const teacher = {
  tname: "John",
  tage: 30,
};
const { tname, tage } = teacher;

// Array Destructuring
const myarr = [1, 2, 3, 4, 5];
const [firs, secon, third, fourth, fifth] = myarr;
console.log(firs, secon, third, fourth, fifth);

// Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
console.log(combined);

// Rest Operator
function sum(...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total;
}
console.log(sum(78, 0.9, 20, 30));

// Map
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((number) => number * 2);
console.log(doubled);

// Filter
const filtered = nums.filter((number) => number > 2);
console.log(filtered);

// Reduce
const reduced = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reduced);

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person1 = new Person("John", 30);
console.log(person1.greet());

// Promises
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

// Async Await
const fetchData1 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(async () => {
    const text = await fetchData1();
    console.log(text);
}, 2000);

// Fetch API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));

// Async Await Fetch API
const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
getData();

