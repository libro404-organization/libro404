import { books } from "./app.js"

    // eliminar un libro 

    let searchInput = document.getElementById('searchInput')
    let bookList = document.getElementById('bookList')
    
    function ShowBooks(books) {
        bookList.innerHTML = ''
    
        if (books.length === 0) {
            let noResultsMessage = document.createElement('p')
            noResultsMessage.textContent = 'No se encontraron resultados.'
            bookList.appendChild(noResultsMessage)
        } else {
            books.forEach((book, index) => {
                let bookDiv = document.createElement('div')
                bookDiv.classList.add('book')
                bookDiv.innerHTML = `
                    <h2>${book.title}</h2>
                    <p>Autor: ${book.author}</p>
                    <p>Género: ${book.genre}</p>
                    <p>Idioma: ${book.language}</p>
                    <p>Precio: ${book.price}</p>
                    <p>Isbn: ${book.isbn}</p>
                    <p>Editorial: ${book.publisher}</p>
                    <button class="remove-btn" data-index="${index}">Eliminar</button>
                `
                bookList.appendChild(bookDiv)
            })
    
            let removeBtns = document.querySelectorAll('.remove-btn')
            removeBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    let index = btn.dataset.index
                    books.splice(index, 1)
                    localStorage.setItem('books', JSON.stringify(books))
                    ShowBooks(books)
                })
            })
        }
    }
    
    searchInput.addEventListener('input', () => {
        let searchTerm = searchInput.value.toLowerCase()
        let filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm) ||
            book.language.toLowerCase().includes(searchTerm) ||
            book.publisher.toLowerCase().includes(searchTerm)
        )
        ShowBooks(filteredBooks)
    })