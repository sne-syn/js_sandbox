function Bicycle(brand, model, price, availability, type, mark, imgAlt, isbn) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.availability = availability;
    this.type = type;
    this.mark = mark;
    this.imgAlt = imgAlt;
    this.isbn = isbn;
    // this.img = img;

}

// Local Storage

function Store() {}

Store.prototype.getBicycleFromStore = function () {
    let bicycles;
    if (localStorage.getItem('bicycles') === null) {
        bicycles = [];
    } else {
        bicycles = JSON.parse(localStorage.getItem('bicycles'));
    }

    return bicycles;
};

Store.prototype.displayBicycleInStore = function () {
    const bicycles = Store.prototype.getBicycleFromStore();

    bicycles.forEach(function (bicycle) {
        const ui = new UI();

        ui.addBicycle(bicycle);
    });
};

Store.prototype.addBicycleToStore = function (bicycle) {
    const bicycles = Store.prototype.getBicycleFromStore();
    bicycles.push(bicycle);
    localStorage.setItem('bicycles', JSON.stringify(bicycles));
};

Store.prototype.removeBicycleFromStore = function (isbn) {
    const bicycles = Store.prototype.getBicycleFromStore();

    bicycles.forEach(function (bicycle, index) {
        if (bicycle.isbn === isbn) {
            bicycles.splice(index, 1);
        }
    });
    localStorage.setItem('bicycles', JSON.stringify(bicycles));
};


// UI 

function UI() {}

UI.prototype.addBicycle = function (bicycle) {
    const cardList = document.getElementById('card-list');

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${bicycle.brand}</td>
    <td>${bicycle.model}</td>
    <td>${bicycle.price}</td>
    <td>${bicycle.availability}</td>
    <td>${bicycle.type}</td>
    <td>${bicycle.mark}</td>
    <td>${bicycle.imgAlt}</td>
    <td>${bicycle.isbn}</td>

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

UI.prototype.deleteBicycle = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};

UI.prototype.clearFields = function () {
    const form = document.getElementById('card-form');
    form.reset();
};

// Handlers

function addBicycleHandler(evt) {
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


    console.log(brand, model, price, availability, type, mark, imgAlt, isbn);

    const ui = new UI();
    const bicycle = new Bicycle(brand, model, price, availability, type, mark, imgAlt, isbn);

    if (brand === '' || model === '' || price === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBicycle(bicycle);
        ui.showAlert('Bicycle card Added!', 'success');
        Store.prototype.addBicycleToStore(bicycle);
        ui.clearFields();
    }

    evt.preventDefault();
}

function deleteBicycleHandler(evt) {
    const ui = new UI();

    ui.deleteBicycle(evt.target);
    ui.showAlert('Bicycle card removed!', 'success');
    console.log(evt.target.parentElement.previousElementSibling.textContent);
    Store.prototype.removeBicycleFromStore(evt.target.parentElement.previousElementSibling.textContent);
    evt.preventDefault();
}

// Event Listeners

document.addEventListener('DOMContentLoaded', Store.prototype.displayBicycleInStore);
document.getElementById('card-form').addEventListener('submit', addBicycleHandler);
document.getElementById('card-list').addEventListener('click', deleteBicycleHandler);