function Bicycle(brand, model, price, availability, type, mark, isbn, imgAlt) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.availability = availability;
    this.type = type;
    this.mark = mark;
    this.isbn = isbn;
    // this.img = img;
    this.imgAlt = imgAlt;
}

// Local Storage

function Store() {}

Store.prototype.getCardFromStore = function () {
    let bicycles;
    if (localStorage.getItem('bicycles') === null) {
        bicycles = [];
    } else {
        bicycles = JSON.parse(localStorage.getItem('bicycles'));
    }

    return bicycles;
};

Store.prototype.displayCard = function () {
    const bicycles = Store.prototype.getCardFromStore();

    bicycles.forEach(function (bicycle) {
        const ui = new UI();

        ui.addCard(bicycle);
    });
};

Store.prototype.addCard = function (bicycle) {
    const bicycles = Store.prototype.getCardFromStore();
    bicycles.push(bicycle);
    localStorage.setItem('bicycles', JSON.stringify(bicycles));
};

Store.prototype.removeCardFromStore = function (isbn) {
    const bicycles = Store.prototype.getCardFromStore();

    bicycles.forEach(function (bicycle, index) {
        if (bicycle.isbn === isbn) {
            bicycles.splice(index, 1);
        }
    });
    localStorage.setItem('bicycles', JSON.stringify(bicycles));
};


// UI 

function UI() {}

UI.prototype.addCard = function (bicycle) {
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
    <td>${bicycle.imgAlt}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    cardList.appendChild(row);
};

UI.prototype.showAlert = function (message, className) {
    const form = document.getElementById('card-form');
    const container = document.querySelector('.container');
    const div = document.createElement('div');

    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
};

UI.prototype.deleteCard = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};

UI.prototype.clearFields = function () {
    const form = document.getElementById('card-form');
    form.reset();
};

// Handlers

function addCardHandler(evt) {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const isbn = document.getElementById('isbn').value;
    const imgAlt = document.getElementById('img-alt').value;

    const availabilityTarget = document.getElementById('availability');
    const typeTarget = document.getElementById('type');
    const markTarget = document.getElementById('mark');

    const availability = availabilityTarget.options[availabilityTarget.selectedIndex].text;
    const type = typeTarget.options[typeTarget.selectedIndex].text;
    const mark = markTarget.options[markTarget.selectedIndex].text;


    console.log(brand, model, price, availability, type, mark, isbn, imgAlt);

    const ui = new UI();
    const bicycle = new Bicycle(brand, model, price, availability, type, mark, isbn, imgAlt);

    if (brand === '' || model === '' || price === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addCard(bicycle);
        ui.showAlert('Bicycle card Added!', 'success');
        Store.prototype.addCard(bicycle);
        ui.clearFields();
    }

    evt.preventDefault();
}

function deleteCardHandler(evt) {
    const ui = new UI();

    ui.deleteCard(evt.target);
    ui.showAlert('Bicycle card removed!', 'success');
    Store.prototype.removeCardFromStore(evt.target.parentElement.previousElementSibling.textContent);
    evt.preventDefault();
}

// Event Listeners

document.addEventListener('DOMContentLoaded', Store.prototype.displayCard);
document.getElementById('card-form').addEventListener('submit', addCardHandler);
document.getElementById('card-list').addEventListener('click', deleteCardHandler);