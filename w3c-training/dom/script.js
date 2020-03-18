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

function Stopwatch() {
    let startTime = 0;
    let endTime = 0;
    let running = false;
    let duration = 0;

    this.start = function () {
        if (running) {
            throw new Error('Stopwatch has already started');
        }
        startTime = new Date();
        running = true;
    };

    this.stop = function () {
        if (!running) {
            throw new Error('Stopwatch is not started');
        }
        running = false;
        endTime = new Date();
        console.log(new Date().getTime());
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = 0;
        endTime = 0;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });
}

let sw = new Stopwatch();

// function find(array, element) {
//   return  array.includes(element) ? array.indexOf(element) : 'Not found';

// }
// function solution(str) {
//   let newArr = [];
//   let size = 2;
//   if (str.length % 2 !== 0) {
//     str = str + '_';
//   }
//   for (let i = 0; i < str.length / size; i++) {
//     newArr[i] = str.slice((i * size), (i * size) + size);
//   }

//   return newArr;
// }

// solution("abcdef");
// solution("abcdefg");
// solution("");

// function solve(meal_cost, tip_percent, tax_percent) {
//   let tip = meal_cost * tip_percent / 100;
//   let tax = meal_cost * tax_percent / 100;
//   let totalCost = Math.round(meal_cost + tip + tax);
//   console.log(totalCost);
// }

// solve(12, 20, 8);

// function capitalize(str) {
//   let stringEven = str;
//   let stringOdd = str;

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       stringEven = stringEven + str[i].toUpperCase();
//       stringOdd = stringOdd + str[i];
//     } else {
//       stringEven = stringEven + str[i];
//       stringOdd = stringOdd + str[i].toUpperCase();
//     }
//   }
//   return [stringEven, stringOdd];
// }

// capitalize("abcdef");
// capitalize("codewars");
// capitalize("abracadabra");
// capitalize("codewarriors");

// var isAnagram = function (test, original) {
//   if (test.length !== original.length) {
//     return false;
//   }

//   test = test.toLowerCase();
//   original = original.toLowerCase();
//   test = [...test].sort().join();
//   original = [...original].sort().join();
//   // original = [...original];
//   // test = test;
//   // console.log(test);
//   // original = original.sort().join();

//   if (test !== original) {
//     return false;
//   }

//   return true;
// };

// var isAnagram = function(test, original) {
//   if (test.length !== original.length) {
//     return false;
//   }

//   test = test.toLowerCase();
//   original = original.toLowerCase();

//   let testCounter = {};
//   let originalCounter = {};

//   for (let letter of test) {
//     testCounter[letter] = (testCounter[letter] || 0) + 1;
//   }

//   for (let letter of original) {
//     originalCounter[letter] = (originalCounter[letter] || 0) + 1;
//   }

//   for (let key in testCounter) {
//     if (!(key in originalCounter)) {
//       return false;
//     }

//     if (originalCounter[key] !== testCounter[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// isAnagram("foefet", "toffee");
// isAnagram("dumble", "bumble");
// isAnagram("Buckethead", "DeathCubeK");
// isAnagram("Twoo", "WooT");

// let solution = (str, ending) => str.endsWith(ending);

// solution('abc', 'bc'); // returns true
// solution('abc', 'd'); // returns false

// function solution(str){
//   str = Array.from(str).reverse().join('');

//   return str;
// }

// console.log(solution('world')); \\

// function countLettersAndDigits(input) {
//   let result = 0;
//   for (let i = 0; i < input.length; i++) {
//     input[i].match(/[a-z0-9]/i) ? result++ : result;
//   }
//   return result;
// }

// countLettersAndDigits("hel2!lo");
// countLettersAndDigits("n!!_ice!!123");
// countLettersAndDigits("1");
// countLettersAndDigits("12345f%%%t5t&/6");
// countLettersAndDigits("u_n_d_e_r__S_C_O_R_E");
// function getCharNum(char) {
//   return char.charCodeAt() - 96;
// }

// function solve(s) {

//   let strConsonantOnly = s.split(/[aeiou]+/);
//   let max = -1;
//   for (let i = 0; i < strConsonantOnly.length; i++) {
//     let tmp = strConsonantOnly[i].split('');
//     let s = 0;
//     tmp.forEach(function (item) {
//       s += getCharNum(item);
//       if (max < s) {
//         max = s;
//       }
//       console.log(max)
//       return max;
//     });
//   }


// console.log(strConsonantOnly)
// console.log(newArray);



// let firstElement = strConsonantOnly[1];
// console.log(firstElement);

// for (let i = 0; i < firstElement.lenght; i++) {
//   console.log(objCharValue[firstElement[i]]);
// }

// s = Array.from(s);
// s.forEach(function (char) {
//   if (char.match(/a?e?i?o?u/)) {
//     result = +0;
//   } else {
//     result += objCharValue[char];
//   }
// });

// return result;

//  https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
// }

// function getCharNum(char) {
//   return char.charCodeAt() - 96;
// }

// function solve(s) {
//   let result = 0;
//   let strConsonantOnly = s.split(/[aeiou]+/);
//   let max = -1;
//   for (let i = 0; i < strConsonantOnly.length; i++) {
//     let tmp = strConsonantOnly[i].split('');
//     let s = 0;
//     tmp.forEach(function (item) {
//       s += getCharNum(item);
//       if (max < s) {
//         max = s;
//       }
//     });
//   }
//   return max;
// }

// solve("zodiacs");
// console.log(solve("twelfthstreet"));
// console.log(solve("strength"));

// const arr = [4, 6, -1, 3, 10, 4];
// const max = Math.max(...arr);

// console.log(max);
// 10

// let range = {
//   from: 97,
//   to: 120
// };

// console.log(range);

// for (let num in range) {
//   if (range.hasOwnProperty(num)) {
//     alert(num); // 1, затем 2, 3, 4, 5
//   }
// }

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       // 4. он должен вернуть значение в виде объекта {done:.., value :...}
//       if (this.current <= this.last) {
//         return {
//           done: false,
//           value: this.current++
//         };
//       } else {
//         return {
//           done: true
//         };
//       }
//     }
//   };
// };
// let newObj = [];
// for (let num of range) {
//   console.log(String.fromCharCode(num)); // 1, затем 2, 3, 4, 5
// }
// console.log(newObj);

// let str = 'text';
// for (let letter of str) {
//   console.log(letter.toUpperCase());
// }

// console.log(str);

// let arr = Array.from(range);
// console.log(arr)

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2
// };

// let arr = Array.from(arrayLike);
// console.log(arr)

// arr = Array.from(range);
// alert(arr); 


// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// let newObj = {};

// arr1.map(function (item, i, arr2) {
//   newObj[item] = arr2[i];
// });

// console.log(newObj);

// let arr = ['Есть', 'жизнь', 'на', 'Земле'];

// let newArr = [];
// arr.map(function (item) {
//   newArr.push(item.length);
// })

// console.log(newArr)

// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// const newData = data.flat();
// console.log(newData);

// https://zellwk.com/blog/es6/

// https://www.frontender.info/es6-in-depth-iterators-and-the-for-of-loop/

// https://learn.javascript.ru/object-toprimitive

// https://www.freecodecamp.org/news/reduce-f47a7da511a9/

// const newData = data.reduce();

// var euros = [29.76, 41.85, 46.5]; 

// var sum = euros.reduce( function(total, amount){
//   return total + amount;
// });

// console.log(sum)

// // const canDrink = ages.filter(function(age) {
// //   if(age >= 21) {
// //     return true;
// //   }
// // });

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// const companyNames = companies.map(company => company.name);

// console.log(companyNames);

// const twoOldestAges = (ages) => ages.sort((a,b) => (a - b)).slice(- 2);

// console.log(twoOldestAges([1, 2, 10, 8]));

function indexEqualsValue(a) {
  a.reduce((acum, current, index) => {

  }, 0);

  //   let result = -1;
  //   a.find(function (element, index) {
  //     if (element === index) {
  //       return result = element;
  //     } 
  //   });
  //   return result;
  //   // https://www.codewars.com/kata/5b7176768adeae9bc9000056/train/javascript
}

console.log(indexEqualsValue([-8, 0, 2, 5]));
indexEqualsValue([-1, 0, 3, 6]);

// function sumOfMinimums(arr) {
//   let result = 0;
//   arr.forEach(function (x) {
//     result += Math.min(...x);
//   });
//   return result;
// }

// sumOfMinimums([
//   [7, 9, 8, 6, 2],
//   [6, 3, 5, 4, 3],
//   [5, 8, 7, 4, 5]
// ]);
// sumOfMinimums([
//   [11, 12, 14, 54],
//   [67, 89, 90, 56],
//   [7, 9, 4, 3],
//   [9, 8, 6, 7]
// ]);

// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];


// const count = fruitBasket.reduce((total, amount) => {
//   if (!total[amount]) {
//     total[amount] = 1;
//   } else {
//     total[amount] = total[amount] + 1;
//   }
//   return total;
// }, {});

// console.log(count);

// const data = {t: {
//   a: 'happy',
//   b: 'robin',
//   c: ['blue', 'green']
// },
// u: {
//   a: 'tired',
//   b: 'panther',
//   c: ['green', 'black', 'orange', 'blue']
// },
// l: {
//   a: 'sad',
//   b: 'goldfish',
//   c: ['green', 'red']
// }
// };

// const {
//   u: {a: adjective , b: noun}
// } = data;

// console.log('Look, here as a ' + adjective, noun);

// let dataFilter = data.reduce((total, amount, index, array) => {
//   amount.c.forEach(function (item) {
//     if (total.indexOf(item) === -1)
//       total.push(item);
//   });
//   return total;
// }, []);

// console.log(dataFilter);

// let reducer = (acum, current) => {
//   return {...acum, [current.b]: current};
// };

// let createObj = data.reduce(reducer, {});

// console.log(createObj);


// function rowWeights(array) {
  // let evenSum = 0;
  // let oddSum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   (i % 2 === 0) ? evenSum += array[i]: oddSum += array[i];
  // }

  // return [evenSum, oddSum];
// }
// console.log(rowWeights([80])); // 80, 0
// rowWeights([100,50]); // 100 50
// rowWeights([50,60,70,80]); // [120,140]
// console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));