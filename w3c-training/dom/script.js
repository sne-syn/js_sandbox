// function js_style() {
//     let text = document.getElementById('text');
//     text.style.fontSize = "14pt";
//     text.style.fontFamily = "Comic Sans MS";
//     text.style.color = 'blue';
// }

// let form = document.getElementById('form1');
// form.addEventListener('submit', function (evt) {
//     let firstName = document.querySelector('input[name="fname"]').value;
//     let lastName = document.querySelector('input[name="lname"]').value;
//     console.log(firstName, lastName);
//     evt.preventDefault();
// });

// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR

// function isIsogram(str) {
//     let strArr = str.toLowerCase().split('');
//     let hash = new Map();
//     console.log(strArr);

// }

// isIsogram("Dermatoglyphics");
// isIsogram("aba");
// isIsogram("moOse");

// function greet () {
//     let greeting = '!DlrowOlleh';

//     let arr = Array.from(greeting.toLowerCase());
//     arr.reverse().splice((arr.length / 2), 0, ' ');
//     return arr.join('');
//    }

//    console.log(greet());

// function numberToPower(number, power) {
//     let result = 1;
//     for (let i = 0; i < power; i++) {
//         result *= number;
//     }
//     return result;
// }

// console.log(numberToPower(3, 2)) // -> 9 ( = 3 * 3 )
// // numberToPower(2, 3) // -> 8 ( = 2 * 2 * 2 )
// // numberToPower(10, 6) // -> 1000000

// function validateCode(code) {
//     let regex = /^[123]/i;
//     return regex.test(code) ? true : false;
// }

// console.log(validateCode(123454));

// function centuryFromYear(year) {
//     var centure = Math.ceil(year / 100);
//     console.log(centure);
// }

// console.log(centuryFromYear(1705))
// console.log(centuryFromYear(1900))
// console.log(centuryFromYear(1601))

// function lowercaseCount(str) {
//     return (str.match(/[a-z]/g) || []).length
// }

// console.log(lowercaseCount("abcABC123"));
// console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));
// console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"));

// function firstNonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//             return arr[i + 1];
//         }
//     }
//     return null;
// }

// console.log(firstNonConsecutive([-6, -5, -4, -3, -2, 0, 2, 3]))
// console.log(firstNonConsecutive([-6, -5, -4, -3, -2, -1, 0, 1, 2]));
// console.log(firstNonConsecutive([10, 11, 12, 13, 14, 15, 16]));
// console.log(firstNonConsecutive([-3, 0, 1, 2, 3, 4, 5, 6]));

// function stringToArray(string) {
//     return string.split(' ');
// }

// stringToArray("Robin Singh");
// stringToArray("I love arrays they are my favorite")

// function calculate(str) {
//     return eval(((str.replace(/plus/g, '+').replace(/minus/g, '-')))).toString;
// }


// calculate("1plus2plus3plus4");
// calculate("1minus2plus2plus3minus4");

// function removeChar(str) {
//     str = str.substring(1, str.length - 1);
//     return str;
// }

// console.log(removeChar('eloquent'));
// removeChar('country');
// removeChar('person');

// ------------ num++

// let number = 12;

// function increase() {
//     return number++;
// }
// console.log(increase()); // 12
// console.log(number); // 13

// // ------------  ++num

// let number1 = 12;

// function increase1() {
//     return ++number1;
// }
// console.log(increase1()); // 13
// console.log(number1); // 13


// // ------------ num + 1

// let number2 = 12;

// function increase2() {
//     return number2 + 1;
// }
// console.log(increase2()); // 13
// console.log(number2); // 12


// // ------------ argument(number)

// let number4 = 12;

// function increase4(number4) {
//     return ++number4;
// }
// console.log(increase4(number4)); // 13
// console.log(number4); // 12


// // ------------ closure

// function increase5() {
//     let number5 = 12;

//     return function () {
//         number5++;
//         console.log(number5);
//     };
// }

// let result5 = increase5(); // превращается в функцию
// result5();
// result5();
// result5();

// function Stopwatch() {
//     let startTime = 0;
//     let endTime = 0;
//     let running = false;
//     let duration = 0;

//     this.start = function () {
//         if (running) {
//             throw new Error('Stopwatch has already started');
//         }
//         startTime = new Date();
//         running = true;
//     };

//     this.stop = function () {
//         if (!running) {
//             throw new Error('Stopwatch is not started');
//         }
//         running = false;
//         endTime = new Date();
//         console.log(new Date().getTime());
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };

//     this.reset = function () {
//         startTime = 0;
//         endTime = 0;
//         running = false;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function () {
//             return duration;
//         }
//     });
// }

// let sw = new Stopwatch();

// function find(array, element) {
//   return  array.includes(element) ? array.indexOf(element) : 'Not found';

// }
function solution(str) {
  let newArr = [];
  let size = 2;
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  for (let i = 0; i < str.length / size; i++) {
    newArr[i] = str.slice((i * size), (i * size) + size);
  }
  
  return newArr;
}

solution("abcdef");
solution("abcdefg");
solution("");