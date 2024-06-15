import { books } from "./app.js"

// modificar la editorial de un book 

let btnModifyPublisher = document.getElementById('btnModifyPublisher')

function options() {
    let select = document.getElementById('bookSelect')
    books.forEach(function(book, index) {
        let option = document.createElement('option')
        option.value = index
        option.textContent = book.title
        select.appendChild(option)
    })
}

btnModifyPublisher.addEventListener('click', function() {
    let select = document.getElementById('bookSelect')
    let index = select.options[select.selectedIndex].value
    let newPublisher = document.getElementById('newPublisherInput').value

    if (index === '') {
        alert('Por favor, seleccione un libro.')
        return
    }

    let book = books[index]
    let previousPublisher = book.publisher
    books[index].publisher = newPublisher


    showChange(previousPublisher, newPublisher)
})

function showChange(previousPublisher, newPublisher) {
    let changeDoneDiv = document.getElementById('changeDone')
    changeDoneDiv.textContent = 'El publisher ha sido cambiado de "' + previousPublisher + '" a "' + newPublisher + '".'
    console.log(books)
}


window.onload = function() {
    options()
}

