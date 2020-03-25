// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.

function f1() {
    alert('Task 1');
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи.

function f2() {
    alert('Task 2');
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

function f3() {
    alert('Task 3');
}

document.querySelector('.p-3').onclick = f3;


// Task 4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

let output4 = document.querySelector('.out-4');
let checkbox4 = document.querySelector('.i-4');

function f4() {
    output4.textContent = checkbox4.checked ? 'true' : 'false';
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

let output5 = document.querySelector('.out-5');
let checkbox5 = document.querySelector('.i-5');

function f5() {
    output5.textContent = checkbox5.checked ? checkbox5.value : 'false';
}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6

let output6 = document.querySelector('.out-6');
let input6 = document.querySelector('.i-6');

function f6() {
    output6.textContent = +input6.value;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

let outputValue = document.querySelector('.out-71');
let outputComparision = document.querySelector('.out-72');
let input7 = document.querySelector('.i-7');

function f7() {
    let password = input7.value;
    outputValue.textContent = +password;

    if (password.length >= 6) {
        outputComparision.textContent = 1;
    } else {
        outputComparision.textContent = 0;
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

let div = document.querySelector('.out-8');

function f8() {
    div.innerHTML = '<input class="i-81" type="text"><button class="button-primary b-81">Click</button><div class="out-81"></div>';

    let output8 = document.querySelector('.out-81');
    let input8 = document.querySelector('.i-81');

    document.querySelector('.b-81').onclick = f81;

    function f81() {
        output8.textContent = input8.value;
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//Создайте один input(radio).r-9  и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен. 

let output9 = document.querySelector('.out-9');
let radio9 = document.querySelector('.r-9');

function f9() {
    output9.textContent = radio9.checked ? radio9.value : 0;
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом.

let output10 = document.querySelector('.out-10');
let input10 = document.querySelector('.i-10');

function f10() {
    let color = input10.value;
    output10.style.backgroundColor = color;
}

document.querySelector('.b-10').onclick = f10;

// Task     11
//   Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

let output11 = document.querySelector('.out-112');
let firstInput = document.querySelector('.i-111');
let secondInput = document.querySelector('.i-112');

function f11() {
    let color = firstInput.value;
    secondInput.value = color;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в  out-12 выбранное в input время.

let output12 = document.querySelector('.out-12');
let input12 = document.querySelector('.i-12');

function f12() {
    let date = input12.value;
    output12.textContent = date;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

let output13 = document.querySelector('.out-13');
let range13 = document.querySelector('.i-13');

function f13() {
    let result = range13.value;
    output13.textContent = result;
}

document.querySelector('.i-13').oninput = f13;

// Task 14
// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

let output14 = document.querySelector('.out-14');
let textarea14 = document.querySelector('.t-14');

function f14() {
    let text = textarea14.value;
    output14.textContent = text;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

let output15 = document.querySelector('.out-15');
let input15 = document.querySelector('.i-15');
let textarea15 = document.querySelector('.t-15');

function f15() {
    let text = input15.value;
    textarea15.value = text;
    output15.textContent = text;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.
let select16 = document.querySelector('.s-16');
let output16 = document.querySelector('.out-16');

function f16() {
    let option = select16.value;
    output16.textContent = option;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

let select17 = document.querySelector('.s-17');
let output17 = document.querySelector('.out-17');

function f17() {
    let option = select17.value;
    output17.textContent = option;
}

document.querySelector('.s-17').onchange = f17;

// Task 18
// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.

let select18 = document.querySelector('.s-18');
let input18 = document.querySelector('.i-18');

function f18() {
    let option = select18.value;
    input18.value = option;
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

let output19 = document.querySelector('.out-19');
let textInput = document.querySelector('.i-191');
let passwordInput = document.querySelector('.i-192');

function f19() {
    let text = textInput.value;
    let password = passwordInput.value;
    output19.textContent = text + ' ' + password;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

// очень внимательно изучите верстку!!! 
// обратите внимание, что мы не используем class, а присвоили name!!!

let form = document.querySelector('.f-20');
let output20 = document.querySelector('.out-20');

function f20(e) {
    e.preventDefault();

    let username = form.elements['username'].value;
    let password = form.elements['password'].value;
    output20.textContent = username + ' ' + password;
}

document.querySelector('.b-20').onclick = f20;