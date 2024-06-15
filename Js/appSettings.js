import { books } from "../Js/app.js"

let sectionAddNewBook = document.getElementById('sectionAddNewBook')
let btnAddNewBook = document.getElementById('btnAddBook')
let btnModifyPublisher = document.getElementById('btnModifyPublisher')

function options() {
    let select = document.getElementById('bookSelect')
    books.forEach(function(libro, index) {
        let option = document.createElement('option')
        option.value = index
        option.textContent = libro.title
        select.appendChild(option)
    })
}

btnAddNewBook.addEventListener('click', function(event) {
    event.preventDefault(books)
    
    let inpTitle = document.getElementById("title").value.trim()
    let newAuthor = document.getElementById("author").value.trim()
    let newGenre = document.getElementById("genre").value.trim()
    let newLanguage = document.getElementById("language").value.trim()
    let newPrice = parseInt(document.getElementById("price").value.trim())  
    let newFormat = document.getElementById("format").value.trim()
    let newisbn = document.getElementById("isbn").value.trim()
    let newdescription = document.getElementById("description").value.trim()
    let newCondicion = document.getElementById("condition").value.trim()
    let newLocation = document.getElementById("location").value.trim()
    let newPublication_date  = document.getElementById("publication_date").value.trim()
    let newPublisher = document.getElementById("publisher").value.trim()
    let newPages = parseInt(document.getElementById("pages").value.trim())
    let newStock = parseInt(document.getElementById("stock").value.trim())
    
    if (!inpTitle || !newAuthor || !newGenre || !newLanguage || !newPrice || !newFormat || !newisbn || !newdescription || !newCondicion || !newLocation || !newPublication_date || !newPublisher || !newPages || !newStock) {
        alert('Por favor, completa todos los campos.')
        return
    }

    books.push({
        title: inpTitle,
        author: newAuthor,
        genre: newGenre,
        language: newLanguage,
        price: newPrice,
        format: newFormat,
        isbn: newisbn,
        description: newdescription,
        condition: newCondicion,
        location: newLocation,
        publication_date: newPublication_date,
        publisher: newPublisher,
        pages: newPages,
        stock: newStock
    })

    sectionAddNewBook.innerHTML = '¡El libro se agregó correctamente!'
    console.log(books)
})


btnModifyPublisher.addEventListener('click', function() {
    let select = document.getElementById('bookSelect')
    let index = select.options[select.selectedIndex].value
    let newPublisher = document.getElementById('newPublisher').value.trim()

    if (index === '') {
        alert('Por favor, seleccione un libro.')
        return
    }

    let libro = books[index]
    let beforePublisher = libro.publisher
    libro.publisher = newPublisher

    showChange(beforePublisher, newPublisher)
})

function showChange(beforePublisher, newPublisher) {
    let changeDoneDiv = document.getElementById('changeDone')
    changeDoneDiv.textContent = 'El publisher ha sido cambiado de "' + beforePublisher + '" a "' + newPublisher + '".'
}


window.onload = function() {
    options(

        
    )
}
