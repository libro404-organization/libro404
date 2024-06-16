 import { books } from "./app.js"

// INICIO 
    
    // catalogo
    const bookList = document.getElementById('bookList')

    showBookCatalogue(books)
 
     function showBookCatalogue(books) {
         bookList.innerHTML = ''
         books.forEach(book => {
             const bookDiv = document.createElement('div')
             bookDiv.classList.add('book')
             bookDiv.innerHTML = `
                <div id='catalogue-section-books-div'>
                    <img id="catalogue-section-books-div-img" src="${book.image}" alt="img${book.image}">
                    <h2 id="catalogue-section-books-div-h2">${book.title}</h2>
                    <p>Autor: ${book.author}</p>
                    <p>Género: ${book.genre}</p>
                    <p>Paginas: ${book.pages}</p>
                    <div id="morepag200-div">
                        <p>Precio: $${book.price}</p> 
                        <form action="templates/joinUs.html">
                            <button>Comprar</button>      
                        </form>
                    </div>
                 </div>
             `
             bookList.appendChild(bookDiv)
         })
     }
 
     // motor de busqueda 
     let searchInput = document.getElementById('searchInput')
 
     searchInput.addEventListener('input', () => {
         const searchTerm = searchInput.value.toLowerCase()
         const filteredBooks = books.filter(book =>
             book.title.toLowerCase().includes(searchTerm) ||
             book.author.toLowerCase().includes(searchTerm) ||
             book.genre.toLowerCase().includes(searchTerm) ||
             book.language.toLowerCase().includes(searchTerm) ||
             book.publisher.toLowerCase().includes(searchTerm)
         )
        showBookCatalogue(filteredBooks)
     })
 
      // Ordenar A-Z
      const btnAZ = document.getElementById('btnAz')
      btnAZ.addEventListener('click', submitAz)
  
      function submitAz() {
         books.sort((a, b) => {
             return a.title.localeCompare(b.title);
         })
          showBookCatalogue(books)
      }
  
      // Ordenar Z-A
      const btnZA = document.getElementById('btnZa')
      
      btnZA.addEventListener('click', submitZa)
  
      function submitZa() {
         books.sort((a, b) => {
             return b.title.localeCompare(a.title);
         })
          showBookCatalogue(books)
      }
 
     // Mostrar los 5 libros más caros
     const btnExpensive = document.getElementById('btnExpensive')
 
     btnExpensive.addEventListener('click', showBooksExpensive)
 
     function showBooksExpensive() {
         books.sort((a, b) =>  b.price - a.price )
         const slicebook = books.slice(0, 5)
         showBookCatalogue(slicebook)
     }
 
     // Filtrar por precio entre $30000 y $80000
     const btnPrice = document.getElementById('btnPrice')
 
     btnPrice.addEventListener('click', showMediumPrice)
 
     function showMediumPrice() {
         let filteredBooks = books.filter(book => book.price >= 30000 && book.price <= 80000)
         showBookCatalogue(filteredBooks)
     }
 
     // Filtrar por libros con más de 200 páginas
     const btnPage = document.getElementById('btnPage')
     btnPage.addEventListener('click', show200Page)
 
     function show200Page() {
         books.sort((a, b) =>  b.pages - a.pages )
         let filteredBooks = books.filter(book => book.pages > 200)
         showBookCatalogue(filteredBooks)
     }
 
 
 