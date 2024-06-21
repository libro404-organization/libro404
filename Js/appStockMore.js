import { books } from "./app.js"

//aumentar

let btnMore = document.getElementById('btnMore')
const currentStock = document.getElementById('currentStock')

function options() {
    let select = document.getElementById('bookSelect')
    books.forEach(function(book, index) {
        let option = document.createElement('option')
        option.value = index
        option.textContent = book.title
        select.appendChild(option)
    })
}

btnMore.addEventListener('click', function() {
    let select = document.getElementById('bookSelect')
    let index = select.options[select.selectedIndex].value
    let newStock = document.getElementById('newStockMore').value
    newStock = parseInt(newStock)
    let book = books[index]
    
    if (isNaN(newStock) || newStock <= 0) {
        alert('Por favor, ingrese una cantidad válida para sumar.');
        return;
    } 
    
    book.stock += newStock
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

// Disminuir