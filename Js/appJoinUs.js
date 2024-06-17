 // UNETENOS 
        // formulario
        const buybooks = [
     
        ];
  
        let form = document.getElementById('form')
        let btnBuyBooks = document.getElementById('joinUs-from-inputs-btn')

        btnBuyBooks.addEventListener('click', submitbuybooks)

        function submitbuybooks() {
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
    
        