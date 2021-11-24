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

let toyUrl = "http://localhost:3000/toys"; //toyUrl is URL where info of all toys is stored at.

function formSubmit(event){ //For pushing toy info to toys
    event.preventDefault();
    // debugger;
  let nameInput = document.getElementsByTagName("input")[0]; //set new toy's name to .value.
  nameInput.id = "name-input";
  toyName = nameInput.value;

  let imgInput = document.getElementsByTagName("input")[1]; //set new toy's image to .value.
  imgInput.id = "image-input";
  toyImage = imgInput.value;

  let toy = { //Create a toy Object
    "name": toyName,
    "image": toyImage,
    "likes": 0
  }

// let imgInput = document.getElementsByTagName("input")[1]; //Set new toy's img to innerText.
// imgInput.id = "image-input";
// toy.image = imgInput.value;

fetch(toyUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(toy) 
})
.catch(function (error){
  alert("Ragnarők!  Unable to create the toy!"); //Alert when error occurs with creating a toy
  document.body.innerHTML = error.message; //replace page contents with this error message.
});

alert("New toy has been added!  Press \"OK\" to relaod the page.");
location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has loaded");
  loadToys();
  let toyForm = document.getElementsByTagName("form")[0];
  toyForm.addEventListener("submit", formSubmit);
});

function loadToys(){ //loadToys is the function for fetching all of the toy Objects.
  fetch(toyUrl, {
    method: "GET"
  })
  .then(response => response.json()) //Converts response to JSON
  .then(data => {
     for(const toy of data){
      const toyContainer = document.getElementById('toy-collection'); //Reference to toy-collection div.
      let toyCard = document.createElement("div"); //create card.
      toyCard.setAttribute("class", "card");

      let toyName = document.createElement("h2"); //Toy's name.
      toyName.innerText = toy.name;

      let toyImage = document.createElement("img"); //Toy's image.
      toyImage.setAttribute("class", "toy-avatar");
      toyImage.setAttribute("src", toy.image);

      let toyLikes = document.createElement("p"); //Toy's number of likes.
      toyLikes.innerText = `${toy.likes} likes`;

      let toyLikeButton = document.createElement("button"); //Toy's like button.
      toyLikeButton.setAttribute("class", "toy-button");
      toyLikeButton.innerText = "Like";
      toyLikeButton.id = toy.id;

      //Append child elements to toyCard.
      toyCard.appendChild(toyName);
      toyCard.appendChild(toyImage);
      toyCard.appendChild(toyLikes);
      toyCard.appendChild(toyLikeButton);
      toyContainer.appendChild(toyCard); //append toyCard to toyContainer.
      buttonListener();
    }
  })
  .catch(function (error){
    alert("Ragnarők!  Unable to fetch the toys!"); //Alert when error occurs with fetching toys
    document.body.innerHTML = error.message; //replace page contents with this error message.
  });
}

// let createToy = document.getElementsByTagName("input")[2]; //The Submit button.

function updateLikes(event){ //Function to add a like
      event.target.value;
      let toyID = `${toyUrl}/${event.target.id}`; //http://localhost:3000/(toy's ID #).
      fetch(toyID, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify()
      })
      .then(data => { //Allows referencing the db data.
        // console.log(event.target.previousElementSibling.innerText);
        let eventArray = event.target.previousElementSibling.innerText.split(" ");
        eventArray[0] = parseInt(eventArray[0], 10); //Convert the # of likes into an int
        eventArray[0] = eventArray[0] + 1; //Add a like
        event.target.previousElementSibling.innerText = eventArray.join(" ");
        // console.log(event.target.previousElementSibling.innerText);
      })
      .catch(function (error){
        alert("Ragnarők!  Unable to leave a like for the toy!"); //Alert when error occurs when liking a toy
        document.body.innerHTML = error.message; //replace page contents with this error message.
      });
    }
    
    function buttonListener(){
      let selectToyButtons = document.querySelectorAll(".toy-button"); //For buttons with class "toy-button"...
      for(const buttons of selectToyButtons){ //Loop through Array to ...
        buttons.addEventListener("click", (updateLikes)); //Place Event Listener on each button.
      }
    }