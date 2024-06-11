let buybooks = [
 
];

function submit(buybooks) {
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
}

console.log(buybooks);