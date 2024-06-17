import { books } from "./app.js"

// agregar eliminar stock 

let tableBody = document.getElementById('bookTableBody')

function displayBooks() {
    tableBody.innerHTML = ''

    books.forEach(function(book) {
        let rowHtml = `
            <div id="stock-books">
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.stock}</td>
                <td><button class="btn-backAndOthersActions" onclick="increaseStock('${book.title}')">+</button></td>
                <td><button class="btn-backAndOthersActions" onclick="decreaseStock('${book.title}')">-</button></td>
            </div>
        `
        tableBody.innerHTML += rowHtml
    })
}

function increaseStock(title) {
    let book = books.find(function(book) {
        return book.title === title
    })

    if (book) {
        book.stock++
        saveChanges()
        displayBooks() // Actualiza la tabla después de cambiar el stock
    }
}

function decreaseStock(title) {
    let book = books.find(function(book) {
        return book.title === title
    })

    if (book && book.stock > 0) {
        book.stock--
        saveChanges()
        displayBooks()
    }
}

function saveChanges() {
    localStorage.setItem('books', JSON.stringify(books))
}

function loadBooks() {
    let storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        let parsedBooks = JSON.parse(storedBooks)
        books.length = 0
        parsedBooks.forEach(book => {
            books.push(book)
        })
    }
}

window.onload = function() {
    loadBooks()
    displayBooks()
}
