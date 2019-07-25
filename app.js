/* alert("123"); */

console.log("Hello World!");
console.table({a: 1, b: 2});
console.error("This is some error");
console.clear();
console.warn("This is warning");

console.time("Time");
console.log("Hello World!");
console.log("Hello World!");
console.timeEnd("Time");

// Variables and declaretaion

var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// var can include numbers, letters, _, $ 
// but CAN NOT start with a number 

// Multi word vars
var firstName = "John"; // Camel case
var first_name = "Sara"; // Underscore
var FirstName = "Tom"; // Pascal case

// CONST can't be changed, reassigned, without value

const nameConst = "John";
console.log(nameConst);

// we still can change stuff into objects or arrays inside the "const"-variable

const person = {
    name: "John",
    age: 30
};

// we change data into object. But we can'nt rename const-person
person.age = "Sara";
person.age = 32;

console.log(person);

// we change data into array. But we can'nt rename const-numbers
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);