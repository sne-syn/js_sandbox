const form = document.getElementById('card-form');
const cardList = document.getElementById('card-list');

function Bicycle (brand, model, price, type, mark, isbn) {
    this.brand = brand;
    this.model = model;
    this.price = price;
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

UI.prototype.addCard = function() {

};

UI.prototype.deleteCard = function() {

};

UI.prototype.clearFields = function() {

};

// Handlers

// function getCardFromStoreHandler() {
//     Store.getCardFromStore();
// }

function addBookHandler() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const type = document.getElementById('type').value;
    const mark = document.getElementById('mark').value;
    const isbn = document.getElementById('isbn').value;

    const ui = new UI();
    const bicycle = new Bicycle(brand, model, price, type, mark, isbn);
}

function deleteCardHandler() {
    const ui = new UI();
}

// Event Listeners

// document.addEventListener('DOMContentLoaded', getCardFromStoreHandler);
form.addEventListener('submit', addBookHandler);
cardList.addEventListener('click', deleteCardHandler);
