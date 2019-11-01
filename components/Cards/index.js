// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardMaker(apiData) {
  ////// creating my elements :

  const divCard = document.createElement("div");
  const divHeadline = document.createElement("div");
  const divAuthor = document.createElement("div");
  const divImgContainer = document.createElement("div");
  const imgUrlOfAuthorsImage = document.createElement("img");
  const spanAuthorsName = document.createElement("span");

  ////// appending my elements to the relevant parents :

  divCard.append(divHeadline, divAuthor);
  divAuthor.append(divImgContainer, spanAuthorsName);
  divImgContainer.append(imgUrlOfAuthorsImage);

  //////// assign classes to some elements :

  divCard.classList.add("card");
  divHeadline.classList.add("headline");
  divAuthor.classList.add("author");
  divImgContainer.classList.add("img-container");

  /////////// Feeding content to some elements :

  divHeadline.textContent = apiData.headline;
  imgUrlOfAuthorsImage.src = apiData.authorPhoto;
  spanAuthorsName.textContent = apiData.authorName;

  return divCard;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const apiDataArray = response.data.articles;

    Object.keys(apiDataArray).forEach(key => {
      value = apiDataArray[key];
      console.log(value);
      value.forEach(info => {
        const cardsContainer = document.querySelector(".cards-container");

        cardsContainer.append(cardMaker(info));
      });
    });
  })
  .catch(error => {
    console.log(error);
  });
