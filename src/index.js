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

//Create a toy Object, where for each key, the value is a reference to where to find it
/*
const toy = {
  Name //String
  Image //URL
  Likes
  ID 
}
*/

//likeToy is a function for updating the number of likes 

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has loaded");

});

function loadToys(){ //loadToys is the function for fetching all of the toy Objects.
  //GET
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
  }
});

//for(const in ){//Use a For In Loop so that, for each toy...}
document.addEventListener("click", likeToy); //Place Event Listener on Like button of each toy.
//PATCH
function likeToy(){ //likeToy is the function for updating the number of likes on a toy

}