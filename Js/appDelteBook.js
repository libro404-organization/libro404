import { books } from "./app.js"

let btnMoveToLast = document.getElementById('btnModifyPublisher')

function options() {
    let select = document.getElementById('bookSelect')
    books.forEach(function(book, index) {
        let option = document.createElement('option')
        option.value = index
        option.textContent = book.title
        select.appendChild(option)
    })
}

btnMoveToLast.addEventListener('click', function() {
    let select = document.getElementById('bookSelect')
    let index = select.options[select.selectedIndex].value

    if (index === '') {
        alert('Por favor, seleccione un libro.')
        return
    }

    let book = books[index]

    books.splice(index, 1)

    books.push(book)

    books.pop()
    
    showMoveToLast(book)
    console.log(books)
})

function showMoveToLast(book) {
    let changeDoneDiv = document.getElementById('changeDone')
    changeDoneDiv.textContent = 'El libro "' + book.title + '" ha sido eliminado.'
}

window.onload = function() {
    options()
}
