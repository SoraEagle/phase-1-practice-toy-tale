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

/*
let toy = {

}
*/

//likeToy is a function for updating the number of likes 

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has loaded");

});

function loadToys(){ //loadToys is the function for fetching all of the toy Objects.
  //GET
}

function submitToy(){
  fetch(toyUrl, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }

    //Body

  })
}

document.addEventListener("click", likeToy);
//PATCH
function likeToy(){

}