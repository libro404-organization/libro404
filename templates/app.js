document.addEventListener('DOMContentLoaded', function() {
let books = [
    {
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        genre: "Ficción",
        language: "Español",
        price: 73465, 
        format: "Físico",
        isbn: "978-84-376-0494-7",
        description: "Una saga familiar que abarca varias generaciones en el pueblo ficticio de Macondo.",
        condition: "Nuevo",
        location: "Librería Don Quijote",
        publication_date: "1967-05-30",
        publisher: "Sudamericana",
        pages: 432,
        stock: 10

    },
    {
        title: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling",
        genre: "Fantasía",
        language: "Español",
        price: 54250, 
        format: "eBook",
        isbn: "978-8478884459",
        description: "El primer libro de la serie de Harry Potter, que sigue las aventuras de un joven mago.",
        condition: "Nuevo",
        location: "Librería Hogwarts",
        publication_date: "1997-06-26",
        publisher: "Salamandra",
        pages: 256,
        stock: 10

        
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Ciencia ficción",
        language: "Español",
        price: 65625, 
        format: "Físico",
        isbn: "978-840-8043736",
        description: "Una distopía que describe una sociedad totalitaria y vigilante.",
        condition: "Nuevo",
        location: "Librería Orwell",
        publication_date: "1949-06-08",
        publisher: "Debolsillo",
        pages: 368,
        stock: 10

    },
    {
        title: "Orgullo y prejuicio",
        author: "Jane Austen",
        genre: "Romance",
        language: "Español",
        price: 45465, 
        format: "Físico",
        isbn: "978-849-1051510",
        description: "La historia de Elizabeth Bennet y su relación con el altivo Sr. Darcy.",
        condition: "Nuevo",
        location: "Librería Austen",
        publication_date: "1813-01-28",
        publisher: "Penguin Clásicos",
        pages: 416,
        stock: 10

    },
    {
        title: "El Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasía",
        language: "Español",
        price: 52465, 
        format: "Físico",
        isbn: "978-8445004006",
        description: "La historia de Bilbo Bolsón y su viaje para recuperar el tesoro guardado por Smaug el Dragón.",
        condition: "Nuevo",
        location: "Librería Rivendel",
        publication_date: "1937-09-21",
        publisher: "Minotauro",
        pages: 304,
        stock: 10

    },
    {
        title: "El código Da Vinci",
        author: "Dan Brown",
        genre: "Misterio",
        language: "Español",
        price: 74375, 
        format: "eBook",
        isbn: "978-849-7593104",
        description: "Una novela de misterio que sigue al profesor Robert Langdon mientras investiga un asesinato en el Louvre.",
        condition: "Nuevo",
        location: "Librería Da Vinci",
        publication_date: "2003-03-18",
        publisher: "Umbriel",
        pages: 592,
        stock: 10

    },
    {
        title: "Matar a un ruiseñor",
        author: "Harper Lee",
        genre: "Ficción",
        language: "Español",
        price: 57750, 
        format: "Físico",
        isbn: "978-849-8388780",
        description: "La historia de Atticus Finch, un abogado que defiende a un hombre negro acusado de violar a una mujer blanca.",
        condition: "Nuevo",
        location: "Librería Finch",
        publication_date: "1960-07-11",
        publisher: "HarperCollins",
        pages: 416,
        stock: 10

    },
    {
        title: "El alquimista",
        author: "Paulo Coelho",
        genre: "Ficción",
        language: "Español",
        price: 48965, 
        format: "Físico",
        isbn: "978-006-2315007",
        description: "La historia de un joven pastor que sigue sus sueños y viaja en busca de un tesoro.",
        condition: "Nuevo",
        location: "Librería Santiago",
        publication_date: "1988-09-01",
        publisher: "Rayo",
        pages: 208,
        stock: 10

    },
    {
        title: "Los pilares de la tierra",
        author: "Ken Follett",
        genre: "Histórica",
        language: "Español",
        price: 80465, 
        format: "Físico",
        isbn: "978-846-6349245",
        description: "La construcción de una catedral gótica en la Inglaterra del siglo XII.",
        condition: "Nuevo",
        location: "Librería Kingsbridge",
        publication_date: "1989-10-02",
        publisher: "Plaza & Janés",
        pages: 1200,
        stock: 10

    },
    {
        title: "La sombra del viento",
        author: "Carlos Ruiz Zafón",
        genre: "Misterio",
        language: "Español",
        price: 69965, 
        format: "Físico",
        isbn: "978-840-8092360",
        description: "Una novela que sigue a Daniel Sempere mientras descubre un misterioso libro en el Cementerio de los Libros Olvidados.",
        condition: "Nuevo",
        location: "Librería Sempere",
        publication_date: "2001-04-01",
        publisher: "Planeta",
        pages: 576,
        stock: 10

    },
    {
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        genre: "Infantil",
        language: "Español",
        price: 34965,
        format: "Físico",
        isbn: "978-607-4000062",
        description: "La historia de un niño que viaja de planeta en planeta, conociendo a extrañas criaturas y aprendiendo lecciones de vida.",
        condition: "Nuevo",
        location: "Librería Asteroide B-612",
        publication_date: "1943-04-06",
        publisher: "Salamandra",
        pages: 96,
        stock: 10

    },
    {
        title: "Crónica de una muerte anunciada",
        author: "Gabriel García Márquez",
        genre: "Ficción",
        language: "Español",
        price: 50225, 
        format: "Físico",
        isbn: "978-843-7612043",
        description: "La historia de un asesinato en un pequeño pueblo latinoamericano y cómo todos lo saben pero nadie lo evita.",
        condition: "Nuevo",
        location: "Librería Santiago Nasar",
        publication_date: "1981-11-25",
        publisher: "Literatura Random House",
        pages: 128,
        stock: 10

    },
    {
        title: "La ciudad y los perros",
        author: "Mario Vargas Llosa",
        genre: "Ficción",
        language: "Español",
        price: 61250, 
        format: "Físico",
        isbn: "978-842-0470543",
        description: "La historia de un grupo de jóvenes en un colegio militar en Lima, Perú, y los secretos y conflictos que surgen entre ellos.",
        condition: "Nuevo",
        location: "Librería Leoncio Prado",
        publication_date: "1962-10-29",
        publisher: "Punto de Lectura",
        pages: 416,
        stock: 10

    },
    {
        title: "El nombre del viento",
        author: "Patrick Rothfuss",
        genre: "Fantasía",
        language: "Español",
        price: 83965, 
        format: "Físico",
        isbn: "978-846-6322811",
        description: "La crónica de la vida de Kvothe, un músico y mago legendario.",
        condition: "Nuevo",
        location: "Librería Eolian",
        publication_date: "2007-03-27",
        publisher: "Plaza & Janés",
        pages: 896,
        stock: 10

    },
    {
        title: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        genre: "Clásico",
        language: "Español",
        price: 59465, 
        format: "Físico",
        isbn: "978-846-7042067",
        description: "Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.",
        condition: "Nuevo",
        location: "Librería La Mancha",
        publication_date: "1605-01-16",
        publisher: "Ediciones Cátedra",
        pages: 1056,
        stock: 10

    },
    {
        title: "El retrato de Dorian Gray",
        author: "Oscar Wilde",
        genre: "Clásico",
        language: "Español",
        price: 37625, 
        format: "Físico",
        isbn: "978-842-0685450",
        description: "La historia de un joven que permanece eternamente joven mientras su retrato envejece con sus vicios y pecados.",
        condition: "Nuevo",
        location: "Librería Wilde",
        publication_date: "1890-07-01",
        publisher: "Alianza Editorial",
        pages: 320,
        stock: 10

    },
    {
        title: "El señor de los anillos: La comunidad del anillo",
        author: "J.R.R. Tolkien",
        genre: "Fantasía",
        language: "Español",
        price: 90965, 
        format: "Físico",
        isbn: "978-844-5072013",
        description: "La primera parte de la épica trilogía que sigue a Frodo Bolsón en su búsqueda para destruir el Anillo Único.",
        condition: "Nuevo",
        location: "Librería Rivendel",
        publication_date: "1954-07-29",
        publisher: "Minotauro",
        pages: 480,
        stock: 10

    },
    {
        title: "La hoguera de las vanidades",
        author: "Tom Wolfe",
        genre: "Drama",
        language: "Español",
        price: 63875, 
        format: "Físico",
        isbn: "978-843-3979120",
        description: "La historia de un hombre de negocios en Wall Street cuya vida se desmorona después de un accidente de tráfico.",
        condition: "Nuevo",
        location: "Librería Wolfe",
        publication_date: "1987-11-01",
        publisher: "Anagrama",
        pages: 816,
        stock: 10

    },
    {
        title: "Anna Karenina",
        author: "León Tolstói",
        genre: "Clásico",
        language: "Español",
        price: 68250, 
        format: "Físico",
        isbn: "978-842-0650595",
        description: "La historia de la aristócrata Anna Karenina y su trágico romance con el oficial de caballería Alexei Vronsky.",
        condition: "Nuevo",
        location: "Librería Tolstói",
        publication_date: "1877-01-28",
        publisher: "Alba Editorial",
        pages: 1024,
        stock: 10

    },
    {
        title: "El perfume: historia de un asesino",
        author: "Patrick Süskind",
        genre: "Ficción",
        language: "Español",
        price: 53175,
        format: "Físico",
        isbn: "978-843-2217509",
        description: "La historia de Jean-Baptiste Grenouille, un asesino obsesionado por el olor perfecto.",
        condition: "Nuevo",
        location: "Librería Grenouille",
        publication_date: "1985-01-01",
        publisher: "Seix Barral",
        pages: 264,
        stock: 10

    }
];
    
// INDEX 
  //catalogo de compra
    
    let bookList = document.getElementById('bookList');

    showBook(books)

    function showBook(books) { 
        books.forEach(book => {
            let bookDiv = document.createElement('div')
            bookDiv.classList.add('book')
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
            `
            bookList.appendChild(bookDiv)
            })
    }

   // motor de busqueda

   const searchInput = document.getElementById('searchInput')

   function ShowBooks(books) {
       bookList.innerHTML = ''
       books.forEach(book => {
           const bookDiv = document.createElement('div')
           bookDiv.classList.add('book')
           bookDiv.innerHTML = `
               <h2>${book.title}</h2>
               <p>Autor: ${book.author}</p>
               <p>Género: ${book.genre}</p>
               <p>Idioma: ${book.language}</p>
               <p>Editorial: ${book.publisher}</p>   
               <div id="morepag200-div">
                <p>Precio: $${book.price}</p> 
                <form action="templates/joinUs.html">
                    <button>Comprar</button>      
                </form>
                </div>             
           `
           bookList.appendChild(bookDiv)
           })
   }

   searchInput.addEventListener('click', () => {
       const searchTerm = searchInput.value.toLowerCase();
       const filteredBooks = books.filter(book =>
           book.title.toLowerCase().includes(searchTerm) ||
           book.author.toLowerCase().includes(searchTerm) ||
           book.genre.toLowerCase().includes(searchTerm) ||
           book.language.toLowerCase().includes(searchTerm) ||
           book.publisher.toLowerCase().includes(searchTerm)
       )
       ShowBooks(filteredBooks)
   })

//     // organizar de la A - Z 

    let btnAZ = document.getElementById('btnAz') 
    let btnZA = document.getElementById('btnZa') 

    btnAZ.addEventListener('click', submitAz)
    btnZA.addEventListener('click', submitZa)

    function submitAz() {
        books.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })
        addCatalogue()
    }

    function submitZa() {
        books.sort((a, b) => {
            return b.title.localeCompare(a.title)
        })
        addCatalogue()
    }

    function addCatalogue() {
        bookList.innerHTML = ''
        showBook(books)
    }

    // organizar los 5 libros más caros 
    let btnExpensive = document.getElementById('btnExpensive')

    btnExpensive.addEventListener('click', showBooksExpensive)

    function showBooksExpensive() {
        books.sort((a, b) => b.price - a.price)
    
        let slicebook = books.slice(0, 5)
        
        listFiveBooks(slicebook)
    }

    function listFiveBooks(slicebook) {
        bookList.innerHTML = ''
        slicebook.forEach(book => {
            let bookDiv = document.createElement('div')
            bookDiv.classList.add('book')
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
            `
            bookList.appendChild(bookDiv)
            })
    }

    // organizar los libros que estan en el rango de 30000 a 80000

    let btnPrice = document.getElementById('btnPrice')

    btnPrice.addEventListener('click', showMediumPrice)

    function showMediumPrice() {
        bookList.innerHTML = '' 
        books.sort((a, b) => b.price - a.price)
    
        let booksPrice 
        
            books.forEach(book => {
            if (book.price >= 30000 && book.price <= 80000) {
                booksPrice = true
            }
            if (booksPrice == true) {
                createBook(book)
            }
        }) 
       
    }
    function createBook(book) {
            let bookDiv = document.createElement('div')
            bookDiv.classList.add('book')
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
            `
            bookList.appendChild(bookDiv)
            
    }

    // organizar los libros que tienen más de 200

    let btnPage = document.getElementById('btnPage')

    btnPage.addEventListener('click', show200Page)

    function show200Page() {
        bookList.innerHTML = ''
        books.sort((a, b) => a.pages - b.pages)
    
        let booksPages 
        
            books.forEach(book => {
            if (book.pages >= 200) {
                booksPages = true
            }
            if (booksPages == true) {
                 more200Pages(book)
            }
        }) 
       
    }
    function more200Pages(book) {
            let bookDiv = document.createElement('div')
            bookDiv.classList.add('book')
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
            `
            bookList.appendChild(bookDiv)
    }

    
// AJUSTES
    // agregar un nuevo libro 

    let sectionAddNewBook = document.getElementById('sectionAddNewBook')
    let btnAddNewBook = document.getElementById('btnAddBook')

    btnAddNewBook.addEventListener('click', submit)
    
function submit() {
    let inpTitle = document.getElementById("title").value
    let newAuthor = document.getElementById("author").value
    let newGenre = document.getElementById("genre").value
    let newLanguage = document.getElementById("language").value
    let newPrice = document.getElementById("price").value   
    newPrice= parseInt(newPrice)
    let newFormat = document.getElementById("format").value
    let newisbn = document.getElementById("isbn").value
    let newdescription = document.getElementById("description").value
    let newCondicion = document.getElementById("condition").value
    let newLocation = document.getElementById("location").value
    let newPublication_date  = document.getElementById("publication_date").value
    let newPublisher = document.getElementById("publisher").value
    let newPages = document.getElementById("pages").value
    newPages = parseInt(newPages)
    
        books.push(
            {
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
            pages: newPages
            }
        ) 
    }

    // modificar la editorial
        
    let btnModifyPublisher = document.getElementById('btnModifyPublisher')

    btnModifyPublisher.addEventListener('click', modifyPublisher)

    function options() {
        let select = document.getElementById('bookSelect')
        books.forEach(function(libro, index) {
            let option = document.createElement('option')
            option.value = index
            option.textContent = libro.title
            select.appendChild(option)
        })
    }

    function modifyPublisher() {
        let select = document.getElementById('bookSelect')
        let index = select.options[select.selectedIndex].value
        let newPublisher = document.getElementById('newPublisher').value

        if (index === '') {
            alert('Por favor, seleccione un libro.')
            return
        }

        let libro = books[index];
        let beforePublisher = libro.publisher
        libro.publisher = newPublisher

        showChange(beforePublisher, newPublisher)
    }

    function showChange(beforePublisher, newPublisher) {
        let changeDoneDiv = document.getElementById('changeDone')
        changeDoneDiv.textContent = 'El publisher ha sido cambiado de "' + beforePublisher + '" a "' + newPublisher + '".'
    }

    window.onload = function() {
       options()
    };
})

// UNETENOS 
    // formulario

    let buybooks = [
 
    ];
    let form = document.getElementById('form')

    function submitbuybooks(buybooks) {
    let userName = document.getElementById("name").value
    let userEmail = document.getElementById("email").value
    let userAddress = document.getElementById("address").value
    let userNumber = document.getElementById("number").value
    userNumber= parseInt(userNumber)
    let userDate = new Date()
    
    
    
      buybooks.push(
          {
          date: userDate,
          name: userName,
          email: userEmail,
          address: userAddress,
          number: userNumber
          }
      ) 
      form.innerHTML = `
                        <p> el formulario fue enviado correctamente <p>
                        <form action="../templates/joinUs.html">
                            <button>volver</button>      
                        </form> 
                        `
    }

    