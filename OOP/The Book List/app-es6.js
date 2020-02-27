class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message, className) {
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        const div = document.createElement('div');

        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

class Store {
    static getBooksFromStore() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;

    }

    static displayBooks() {
        const books = Store.getBooksFromStore();

        books.forEach(function (book) {
            const ui = new UI();

            ui.addBookToList(book);
        });
    }

    static addBookToStore(book) {
        const books = Store.getBooksFromStore();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBookFromStore(isbn) {
        const books = Store.getBooksFromStore();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

function addBookHandler(evt) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    // validation
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        Store.addBookToStore(book);
        ui.showAlert('Book Added!', 'success');
        ui.clearFields();
    }

    evt.preventDefault();
}

function deleteBookHandler(evt) {
    const ui = new UI();

    ui.deleteBook(evt.target);
    ui.showAlert('Book removed!', 'success');
    Store.removeBookFromStore(evt.target.parentElement.previousElementSibling.textContent);

    evt.preventDefault();
}

document.addEventListener('DOMContentLoaded', Store.displayBooks);
document.getElementById('book-form').addEventListener('submit', addBookHandler);
document.getElementById('book-list').addEventListener('click', deleteBookHandler);