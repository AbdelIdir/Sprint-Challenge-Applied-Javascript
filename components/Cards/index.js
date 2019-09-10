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

function cardMaker (artcontent){

////////////////////////////////////////////////////////////// element creator
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgCont = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
////////////////////////////////////////////////////////////// class creator
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgCont.classList.add("img-container");
////////////////////////////////////////////////////////////// content appender
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(span);
 ////////////////////////////////////////////////////////////// content maker
    headline.textContent = artcontent.headline;
    img.src = artcontent.authorPhoto;
    span.textContent = "By " + artcontent.authorName;

    return card;

}

const containCards = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
  console.log(response.data);
  const art = response.data.articles;
  console.log(art);
  for( content in art){
    const contentArr = art[content];
    console.log(contentArr);
    contentArr.forEach(element => {
        const newArr = cardMaker(element);
        containCards.appendChild(newArr);
    });
  }
})
.catch(error => {
 console.error(error)
});
