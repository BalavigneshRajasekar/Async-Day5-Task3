//This hold the User input
let gameName = document.getElementsByTagName("input");
//The below two elements for alert and spinner
let alertDiv = document.getElementsByClassName("alert");
let spinnerDiv = document.getElementsByClassName("spin");

//This function initialize the API call with user input
function getOffers() {
  //If user clicked the bTN the spinner will be enabled
  spinnerDiv[0].classList.replace("d-none", "d-block");
  //If there is any alert are displayed it will be disabled
  alertDiv[0].classList.replace("d-block", "d-none");
  //This is the API call
  let api = "https://www.cheapshark.com/api/1.0/deals?title=";
  let promise = new Promise((resolve, reject) => {
    fetch(api + gameName[0].value)
      .then((response) => {
        return response.json();
      })
      .then((gameList) => {
        resolve(gameList);
        fetchGameData(promise);
      })
      .catch((error) => {
        reject(error);
        fetchGameData(promise);
      });
  });
  gameName[0].focus();
  gameName[0].value = "";
}

//The below function will fetch the game data to the client
function fetchGameData(apiData) {
  //This parent hold the newly created HTML element through DOM
  let parent = document.getElementsByClassName("parent");
  apiData
    .then((gameData) => {
      //If we get the game data the spinner will disappear
      spinnerDiv[0].classList.replace("d-block", "d-none");

      //Here we check the game data array is empty or not
      if (gameData.length > 0) {
        alertDiv[0].classList.replace("d-block", "d-none");
        parent[0].innerHTML = "";
        gameData.forEach((element) => {
          //The child element which shows all the game data
          let child = document.createElement("div");
          child.innerHTML = ` <div class="card">
          <h4 class="px-3 py-2 fst-italic fw-bolder">${element.title}</h4>
          <img style="width:286px;height:150px"
            src="${element.thumb}"
            class="card-img-top px-3 rounded-2"
            alt="..."
          />
          <div class="card-body shadow-lg text-center">
            <h5 class="card-title pb-3 border-bottom border-warning">
              StoreID : ${element.storeID}
            </h5>
            <h5 class="card-title pb-3 border-bottom border-warning">
              GameID : ${element.gameID}
            </h5>
            <h6 class="card-text">Normal price : ${element.normalPrice} $</h6>
            <h6 class="card-text">sale price : ${element.salePrice} $</h6>
            <h6 class="card-text">
              Rating : ${element.dealRating}<i class="bi bi-star-fill icon"></i>
            </h6>
           <a href="#" class="btn btn-success"
              ><sub class="text-decoration-line-through ">${element.normalPrice}</sub>${element.salePrice} $
              <i class="bi bi-cart-check-fill px-2 "></i
            ></a>
          </div>
        </div>`;
          child.classList.add("px-3", "py-2", "child");
          parent[0].appendChild(child);
        });
      }
      //If the game data array is empty  the alert will be displayed
      else {
        parent[0].innerHTML = "";
        spinnerDiv[0].classList.replace("d-block", "d-none");
        alertDiv[0].classList.replace("d-none", "d-block");
        alertDiv[0].innerHTML = "Game Does not exist";
        parent;
      }
    })
    // This will catch the rejected promise
    .catch((error) => {
      parent[0].innerHTML = "";
      spinnerDiv[0].classList.replace("d-block", "d-none");
      alertDiv[0].classList.replace("d-none", "d-block");
      alertDiv[0].innerHTML = error.message;
    });
}
