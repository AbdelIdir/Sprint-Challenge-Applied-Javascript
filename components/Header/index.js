// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function header() {
////////////////////////////////////////////////////// element creator
    const headDiv = document.createElement("div");
    const spanDate = document.createElement("span");
    const h1 = document.createElement("h1");
    const spanTemp = document.createElement("span");

//////////////////////////////////////////////////////////  class add

    headDiv.classList.add("header");
    spanDate.classList.add("date");
    spanTemp.classList.add("temp");

 //////////////////////////////////////////////////////////  content add

    spanDate.textContent = "SMARCH 28, 2019";
    h1.textContent = "Lambda Times";
    spanTemp.textContent = "98°";


 //////////////////////////////////////////////////////////  appender
headDiv.appendChild(spanDate);
headDiv.appendChild(h1);
headDiv.appendChild(spanTemp);


return headDiv;
}

const container = document.querySelector(".header-container");
container.appendChild(header());


console.log(container);

