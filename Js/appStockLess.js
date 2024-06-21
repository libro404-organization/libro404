import { books } from "./app.js"

//disminuir 

let btnLess = document.getElementById('btnLess')
const currentStock = document.getElementById('currentStock')

function options() {
    let select = document.getElementById('bookSelect')
    books.forEach(function(book, index) {
        let option = document.createElement('option')
        option.value = index
        option.textContent = book.title
        select.appendChild(option)
        console.log(book.stock)
    })
}

btnLess.addEventListener('click', function() {
    let select = document.getElementById('bookSelect')
    let index = select.options[select.selectedIndex].value
    let newStock = document.getElementById('newStockLess').value
    newStock = parseInt(newStock)
    let book = books[index]

    if (isNaN(newStock) || newStock <= 0) {
        alert('Por favor, ingrese una cantidad válida para restar.');
        return;
    } else if (book.stock < newStock) {
        alert('Por favor, ingrese una cantidad válida para restar, el valor no puede ser mayor al stock actual.')
        return
    }

    book.stock -= newStock
    currentStock.textContent = `Stock: ${book.stock}`
    showChange(book)
})

function showChange(book) {
    let changeDoneDiv = document.getElementById('changeDone')
    changeDoneDiv.textContent = `el stock del libro ${book.title} ha sido aumentado a ${book.stock} `
    console.log(books)
}


window.onload = function() {
    options()
}
