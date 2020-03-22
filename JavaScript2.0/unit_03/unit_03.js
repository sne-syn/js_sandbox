// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

let input1 = document.querySelector('.i-1');
let output1 = document.querySelector('.out-1');

function f1() {
    if (+input1.value == 4) {
        output1.textContent = 'true';
    } else {
        output1.textContent = 'false';
    }
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let output2 = document.querySelector('.out-2');

function f2() {
    if (a21 > a22) {
        output2.textContent = a21;
    } else {
        output2.textContent = a22;
    }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let input3_1 = document.querySelector('.i-31');
let input3_2 = document.querySelector('.i-32');
let output3 = document.querySelector('.out-3');

function f3() {
    let num1 = +input3_1.value;
    let num2 = +input3_2.value;
    if (num1 > num2) {
        output3.textContent = num1;
    } else {
        output3.textContent = num2;
    }
}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let input4 = document.querySelector('.i-4');
let output4 = document.querySelector('.out-4');
let today = new Date().getFullYear();

function f4() {
    let birthYear = +input4.value;

    if (today - birthYear >= 18) {
        output4.textContent = 1;
    } else {
        output4.textContent = 0;
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let input5 = document.querySelector('.i-5');
let output5 = document.querySelector('.out-5');

function f5() {
    let num = +input5.value;

    if (num > 0) {
        output5.textContent = 1;
    } else if (num == 0) {
        output5.textContent = 0;
    } else {
        output5.textContent = 'm';
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let input6 = document.querySelector('.i-6');
let output6 = document.querySelector('.out-6');

function f6() {
    let num = +input6.value;

    if (num % 2 === 0) {
        output6.textContent = 'even';
    } else {
        output6.textContent = 'odd';
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let input7_1 = document.querySelector('.i-71');
let input7_2 = document.querySelector('.i-72');
let output7 = document.querySelector('.out-7');

function f7() {
    let num1 = +input7_1.value;
    let num2 = +input7_2.value;

    output7.textContent = Math.pow(num1, num2);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let output8 = document.querySelector('.out-8');

function f8() {
    let selectValue = document.querySelector('.s-8').value;

    switch (+selectValue) {
        case 1:
            output8.textContent = 'one';
            break;

        case 2:
            output8.textContent = 'two';
            break;
        case 3:
            output8.textContent = 'three';
            break;
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let input9 = document.querySelector('.i-9');
let output9 = document.querySelector('.out-9');

function f9() {
    let flatNum = input9.value;

    switch (true) {
        case (flatNum > 0 && flatNum <= 32):
            output9.textContent = 1;
            break;
        case (flatNum >= 33 && flatNum <= 43):
            output9.textContent = 2;
            break;
        case (flatNum >= 44 && flatNum <= 64):
            output9.textContent = 3;
            break;
        default:
            output9.textContent = 0;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
//     Дан input i-101 и input-102, type=number.  Дан select s-103, который содержит четыре операции - +, -, *, / . Дана кнопка b-10, при нажатии на которую срабатывает функция f10. Функция выводит в out-10 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат 1+13 т.е. 14.

let input10_1 = document.querySelector('.i-101');
let input10_2 = document.querySelector('.i-102');
let output10 = document.querySelector('.out-10');

function f10() {
    let num1 = +input10_1.value;
    let num2 = +input10_2.value;
    let operation = document.querySelector('.s-103').value;

    switch (true) {
        case (num1 === 0 || num2 === 0):
            output10.textContent = 'Заполните все поля формы';
            break;
        case (operation === '+'):
            output10.textContent = num1 + num2;
            break;
        case (operation === '-'):
            output10.textContent = num1 - num2;
            break;
        case (operation === '*'):
            output10.textContent = num1 * num2;
            break;
        case (operation === '/'):
            output10.textContent = num1 / num2;
            break;
    }
}

document.querySelector('.b-10').onclick = f10;


// Task     11
//     Дан select s-111 и s-112, каждый из которых содержит 1 и 0.  Дан select s-113, который содержит две операции - && и || . Дана кнопка b-11, при нажатии на которую срабатывает функция f11. Функция выводит в out-11 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&,  нужно вывести результат операции 1&&1 т.е. 1 или 0.

let output11 = document.querySelector('.out-11');

function f11() {
    let num1 = document.querySelector('.s-111').value;
    let num2 = document.querySelector('.s-112').value;
    let operation = document.querySelector('.s-113').value;

    switch (operation) {
        case '&&':
            output11.textContent = +num1 && +num2;
            break;
        case '||':
            output11.textContent = +num1 || +num2;
            break;
        default:
            output11.textContent = 'Something went wrong';
    }
}

document.querySelector('.b-11').onclick = f11;