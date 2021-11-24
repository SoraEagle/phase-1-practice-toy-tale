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
/* const toy = { Create toy Object; For each key, the value is a reference to where to find it
  Name:  document.getElementById(""); //Get from nameInput.value
  Image:  document.getElementById(""); //Get from imgInput.value
  Likes: getElementById("");}*/
let nameInput = document.getElementsByTagName("input")[0]; //set new toy's name to innerText.
nameInput.id = "name-input";
nameInput.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.value);
  toyData.toyName = nameInput.value;
  console.log(toyData.toyName);
})

let imgInput = document.getElementsByTagName("input")[1]; //Set new toy's img to innerText.
imgInput.id = "image-input";
imgInput.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.value);
  toyData.toyImage = imgInput.value;
  console.log(toyData.toyImage);
})

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has loaded");
  loadToys();
});

let toyData = { //Object used to create a new toy.
  "toyName": "",
  "toyImage": "",
  "toyLikes": 0
}

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

let createToy = document.getElementsByTagName("input")[2]; //The Submit button.
createToy.addEventListener("click", (event) => {
  event.preventDefault(); //Prevent reloading the page after clicking the button.
  function addToy(){ //addToy is the function for submitting a new toy to the list.
    fetch(toyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(toyData) 
    })
    .catch(function (error){
      alert("Ragnarők!  Unable to create the toy!"); //Alert when error occurs with creating a toy
      document.body.innerHTML = error.message; //replace page contents with this error message.
  });
  }
});

function updateLikes(event){ //Function to add a like
      event.preventDefault(); //Prevent refreshing of the page.
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