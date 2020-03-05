'use strict';
/*
let name = 'John';
let admin = name;
console.log(admin);

let ourPlanetName = 'Earth';
let currentVisitorName  = name;

name = 'Ilya'; 
console.log(`hello ${1}`); 
// hello 1
console.log(`hello ${"name"}`);
// hello "name"
console.log(`hello ${name}`);
// Hello Ilya

// Преобразование

console.log("" + 1 + 0);
// '10'
console.log("" - 1 + 0);
// -1
console.log(true + false);
// 1
console.log(6 / "3");
// 2
console.log("2" * "3");
// 6
console.log(4 + 5 + "px");
// '9px'
console.log("$" + 4 + 5);
// '$45'
console.log("4" - 2);
// 2
console.log("4px" - 2);
// NaN
console.log(7 / 0);
// Infinity
console.log("  -9  " + 5);
// ' -9 5'
console.log("  -9  " - 5);
// -14
console.log(null + 1);
// 1
console.log(undefined + 1);
// NaN
console.log(" \t \n" - 2);
// -2

console.log(
true + false,
// 1
12 / "6",
// 2
"number" + 15 + 3,
// 'number153'
15 + 3 + "number",
// '18number'
[1] > null,
// true
"foo" + + "bar",
'true' == true,
// false
false == 'false',
// false
null == '',
// false
!!"false" == !!"true",
[] + null + 1,
// 
0 || "0" && {},

[1,2,3] == [1,2,3],
{}+[]+{}+[1],

!+[]+[]+![],
new Date(0) - 0,
(new Date(0) + 0)
);
*/

/*
let number = prompt('Tell me your favorite number','');

if (number > 0) {
  alert(1)
} else if (number < 0) {
  alert(-1)
} else {
  alert(0)
}
*/ 

// let result = (a + b < 4) ? 'Less' : 'Too much';

// let message = (login === "Coworker") ? 'Hello' :
//               (login === 'Director') ? 'Good day' :
//               (login == '') ? 'No login' :
//               '';


let age = prompt('Your age', '');

let message = (age >= 18) ? 'Hi adult' :
              (age < 18 && age > 6) ? 'Hello child' :
               'Call your mom, dear';

alert(message);