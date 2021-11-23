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
  Name:  document.getElementById(""); //String
  Image:  document.getElementById(""); //URL
  Likes: getElementById("");
}*/

let nameInput = document.getElementsByTagName("input")[0]; //set new toy's name to innerText.
nameInput.id = "name-input";
nameInput.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.value);
  //return event
})

let imgInput = document.getElementsByTagName("input")[1]; //Set new toy's img to innerText.
imgInput.id = "image-input";
imgInput.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.value);
  //
})

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has loaded");
  loadToys();
});

let toyData = { //Object used to create a new toy.
  "toyName": nameInput.innerHTML,
  "toyImage": imgInput.innerHTML,
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
      toyLikeButton.innerText = "Like";
      toyLikeButton.id = toy.id;

      //Append child elements to toyCard.
      toyCard.appendChild(toyName);
      toyCard.appendChild(toyImage);
      toyCard.appendChild(toyLikes);
      toyCard.appendChild(toyLikeButton);
      toyContainer.appendChild(toyCard); //append toyCard to toyContainer.

      let toyID = `http://localhost:3000/toys/${toyLikeButton.id}`;
      toyLikeButton.addEventListener("click", (event) => { //Place Event Listener on Like button of each toy.
        event.preventDefault();
        fetch(toyID, {
          method: "PATCH", 
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
        })
        .then(data => {
          toy.likes = `${toy.likes + 1} likes`;
        })
        .catch(function (error){
          alert("Ragnarők!  Unable to leave a like for the toy!"); //Alert when error occurs when liking a toy
          document.body.innerHTML = error.message; //replace page contents with this error message.
        });
      });
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
      body: JSON.stringify(toyData) //
    })
    .catch(function (error){
      alert("Ragnarők!  Unable to create the toy!"); //Alert when error occurs with creating a toy
      document.body.innerHTML = error.message; //replace page contents with this error message.
  });
  }
});