let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

let toyUrl = "http://localhost:3000/toys"; //toyUrl is the URL that all of the toy info is stored at.
/* Create a toy Object, where for each key, the value is a reference to where to find it
const toy = {
  Name:  document.getElementBy  //String
  Image:  document.getElementBy  //URL
  Likes: 
  ID:  `http://localhost:3000/toys/${id}`
}*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has loaded");
  loadToys();
});

function loadToys(){ //loadToys is the function for fetching all of the toy Objects.
  fetch(toyUrl, {
    method: "GET" //Method to retrieve
    .then(response => response.json()) //Converts response to JSON
      .then(data => { //Where the toy cards will be created
        const toyContainer = document.getElementById('toy-collection'); //Reference to toy-collection div.

      })
  })
  .catch(function (error){
    let message = 'Code is still in Beta!';
    alert("Ragnarők!  Unable to fetch the toys!"); //Alert when error occurs with fetching toys
    document.body.innerHTML = error.message; //replace page contents with this error message.
});
}

document.getElementsByClassName("submit").addEventListener("click", (event) => {
  event.preventDefault(); //Prevent reloading the page after clicking the button.
  function addToy(){ //addToy is the function for submitting a new toy to the list.
    fetch(toyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
      body: JSON.stringify({
        //Toy Object:
        //"Name"
        //"Image"
        //"Likes": 0
      })
  
    })
    .catch(function (error){
      let message = 'Code is still in Beta!';
      alert("Ragnarők!  Unable to create the toy!"); //Alert when error occurs with fetching toys
      document.body.innerHTML = error.message; //replace page contents with this error message.
  });
  }
});

//for(const id of ){//Use a For Of Loop so that, for each toy...}
let toyID = `http://localhost:3000/toys/${id}`;
document.addEventListener("click", likeToy); //Place Event Listener on Like button of each toy.

fetch(toyID, {
  method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
      body: JSON.stringify({

      })
})
.catch(function (error){
  let message = 'Code is still in Beta!';
  alert("Ragnarők!  Unable to like the toy!"); //Alert when error occurs with fetching toys
  document.body.innerHTML = error.message; //replace page contents with this error message.
});