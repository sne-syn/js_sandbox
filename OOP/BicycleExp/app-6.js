class Bicycle{
    constructor(brand, model, price, availability, type, mark, imgAlt, isbn) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.availability = availability;
        this.type = type;
        this.mark = mark;
        this.imgAlt = imgAlt;
        this.isbn = isbn;
    }
}

class UI {
    addBicycle(bicycle) {
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
    }

    showAlert(message, className) {
        const form = document.getElementById('card-form');
        const container = document.querySelector('.container');
        const div = document.createElement('div');
    
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        container.insertBefore(div, form);
    
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBicycle(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        const form = document.getElementById('card-form');
        form.reset();
    }
}

class Store {
    static getBicycleFromStore() {
        let bicycles;
        if (localStorage.getItem('bicycles') === null) {
            bicycles = [];
        } else {
            bicycles = JSON.parse(localStorage.getItem('bicycles'));
        }
    
        return bicycles;
    }

    static displayBicycleInStore() {
        const bicycles = Store.getBicycleFromStore();

        bicycles.forEach(function (bicycle) {
            const ui = new UI();
    
            ui.addBicycle(bicycle);
        });
    }

    static addBicycleToStore(bicycle) {
        const bicycles = Store.getBicycleFromStore();
        bicycles.push(bicycle);
        localStorage.setItem('bicycles', JSON.stringify(bicycles));
    }
    
    static removeBicycleFromStore(isbn) {
        const bicycles = Store.getBicycleFromStore();

        bicycles.forEach(function (bicycle, index) {
            if (bicycle.isbn === isbn) {
                bicycles.splice(index, 1);
            }
        });
        localStorage.setItem('bicycles', JSON.stringify(bicycles));
    }
}

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

    const ui = new UI();
    const bicycle = new Bicycle(brand, model, price, availability, type, mark, imgAlt, isbn);

    if (brand === '' || model === '' || price === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBicycle(bicycle);
        ui.showAlert('Bicycle card Added!', 'success');
        Store.addBicycleToStore(bicycle);
        ui.clearFields();
    }

    evt.preventDefault();
}

function deleteBicycleHandler(evt) {
    const ui = new UI();

    ui.deleteBicycle(evt.target);
    ui.showAlert('Bicycle card removed!', 'success');
    Store.removeBicycleFromStore(evt.target.parentElement.previousElementSibling.textContent);
    evt.preventDefault();
}

document.addEventListener('DOMContentLoaded', Store.displayBicycleInStore);
document.getElementById('card-form').addEventListener('submit', addBicycleHandler);
document.getElementById('card-list').addEventListener('click', deleteBicycleHandler);