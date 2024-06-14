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
    let newStock = document.getElementById("stock").value
    newStock = parseInt(newStock)
    
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
            pages: newPages,
            stock: newStock
            }
        ) 
        sectionAddNewBook.innerHTML = ''
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
    }
    ;