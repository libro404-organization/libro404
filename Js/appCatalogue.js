import { books } from './app.js';

    const bookList = document.getElementById('bookList');

    function showBookCatalogue(books) {
        bookList.innerHTML = '';
        books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
                <h2>${book.title}</h2>
                <p>Autor: ${book.author}</p>
                <p>Género: ${book.genre}</p>
                <p>Paginas: ${book.pages}</p>
                <div id="morepag200-div">
                    <p>Precio: $${book.price}</p> 
                    <form action="templates/joinUs.html">
                        <button>Comprar</button>      
                    </form>
                </div>             
            `;
            bookList.appendChild(bookDiv);
        });
    }

    // Ordenar A-Z
    const btnAZ = document.getElementById('btnAz');
    btnAZ.addEventListener('click', submitAz);

    function submitAz() {
        books.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        showBookCatalogue(books);
    }

    // Ordenar Z-A
    const btnZA = document.getElementById('btnZa');
    btnZA.addEventListener('click', submitZa);

    function submitZa() {
        books.sort((a, b) => {
            return b.title.localeCompare(a.title);
        });
        showBookCatalogue(books);
    }

    // Mostrar los 5 libros más caros
    const btnExpensive = document.getElementById('btnExpensive');
    btnExpensive.addEventListener('click', showBooksExpensive);

    function showBooksExpensive() {
        const slicebook = books.slice(0, 5);
        showBookCatalogue(slicebook);
    }

    // Filtrar por precio entre $30000 y $80000
    const btnPrice = document.getElementById('btnPrice');
    btnPrice.addEventListener('click', showMediumPrice);

    function showMediumPrice() {
        const filteredBooks = books.filter(book => book.price >= 30000 && book.price <= 80000);
        showBookCatalogue(filteredBooks);
    }

    // Filtrar por libros con más de 200 páginas
    const btnPage = document.getElementById('btnPage');
    btnPage.addEventListener('click', show200Page);

    function show200Page() {
        const filteredBooks = books.filter(book => book.pages > 200);
        showBookCatalogue(filteredBooks);
    }

    showBookCatalogue(books);
