const fullname = document.getElementById("fullname");
const button = document.querySelector(".btn-primary")
let personObj

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

button.addEventListener("click", () => {
  fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(resp => addPerson(resp.results[0]))
})

function addPerson(object) {
  document.querySelector('#fullname')
    .innerText = `${object.name.first} ${object.name.last}`
  document.querySelector('#email')
    .innerText = object.email
  document.querySelector('#phone')
    .innerText = object.phone
  document.querySelector('#date_of_birth')
    .innerText = 
      object.dob.date.slice(0, object.dob.date.search(/T/))
}
