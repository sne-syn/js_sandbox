const form = document.getElementById('card-form');
const cardList = document.getElementById('card-list');

function Bicycle (brand, model, price, availability, type, mark, isbn) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.availability = availability;
    this.type = type;
    this.mark = mark;
    this.isbn = isbn;
}

// Local Storage

function Store (){}
Store.prototype.addCardToStore = function (){};
Store.prototype.removeCardFromStore = function (){};
Store.prototype.getCardFromStore = function (){};

// UI 

function UI (){}

UI.prototype.addCard = function(bicycle) {
    const cardList = document.getElementById('card-list');

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${bicycle.brand}</td>
    <td>${bicycle.model}</td>
    <td>${bicycle.price}</td>
    <td>${bicycle.availability}</td>
    <td>${bicycle.type}</td>
    <td>${bicycle.mark}</td>
    <td>${bicycle.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    cardList.appendChild(row);
};

UI.prototype.showAlert = function (message, className) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');

    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
};

UI.prototype.deleteCard = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};

UI.prototype.clearFields = function() {
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('price').value = '';
    document.getElementById('isbn').value = '';
};

// Handlers

// function getCardFromStoreHandler() {
//     Store.getCardFromStore();
// }

function addCardHandler(evt) {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const isbn = document.getElementById('isbn').value;

    const availabilityTarget = document.getElementById('availability');
    const typeTarget = document.getElementById('type');
    const markTarget = document.getElementById('mark');

    const availability = availabilityTarget.options[availabilityTarget.selectedIndex].text;    
    const type = typeTarget.options[typeTarget.selectedIndex].text;
    const mark = markTarget.options[markTarget.selectedIndex].text;


    console.log(brand, model, price, availability, type, mark, isbn);

    const ui = new UI();
    const bicycle = new Bicycle(brand, model, price, availability, type, mark, isbn);

    if (brand === '' || model === '' || price === ''|| isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addCard(bicycle);
        ui.showAlert('Bicycle card Added!', 'success');
        ui.clearFields();
    }

    evt.preventDefault();
}

function deleteCardHandler(evt) {
    const ui = new UI();

    ui.deleteCard(evt.target);
    ui.showAlert('Bicycle card removed!', 'success');

    evt.preventDefault();
}

// Event Listeners

// document.addEventListener('DOMContentLoaded', getCardFromStoreHandler);
form.addEventListener('submit', addCardHandler);
cardList.addEventListener('click', deleteCardHandler);
