// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    /////// Creating my elements:
  
    const headerDiv = document.createElement("div");
    const spanDate = document.createElement("span");
    const h1Title = document.createElement("h1");
    const spanTemp = document.createElement("span");
  
    /////////    Appending my elements:
  
    headerDiv.append(spanDate, h1Title, spanTemp);
  
    ///////// Assigning classes to elements:
  
    headerDiv.classList.add("header");
    spanDate.classList.add("date");
    spanTemp.classList.add("temp");
  
    ////////// Adding content to some elements:
  
    spanDate.textContent = "SMARCH 28, 2019";
    h1Title.textContent = "Lambda Times";
    spanTemp.textContent = "98°";
  
    return headerDiv;
  }
  
  const containHeader = document.querySelector(".header-container");
  
  containHeader.append(Header());
  