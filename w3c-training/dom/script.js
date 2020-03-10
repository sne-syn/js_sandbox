function js_style() {
    let text = document.getElementById('text');
    text.style.fontSize = "14pt";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = 'blue';
}

let form = document.getElementById('form1');
form.addEventListener('submit', function (evt) {
    let firstName = document.querySelector('input[name="fname"]').value;
    let lastName = document.querySelector('input[name="lname"]').value;
    console.log(firstName, lastName);
    evt.preventDefault();
});

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

function removeChar(str) {
    str = str.substring(1, str.length - 1);
    return str;
}

console.log(removeChar('eloquent'));
removeChar('country');
removeChar('person');