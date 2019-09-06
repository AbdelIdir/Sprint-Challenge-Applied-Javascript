// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function tabMaker(data){

 const tab = document.createElement("div");
    tab.classList.add("tab");
    topics.appendChild(tab);


    tab.textContent = data;

    
    return tab;
}
//topics.appendChild(tabMaker());
const topics = document.querySelector(".topics");
//topics.appendChild(tabMaker());


axios.get("https://lambda-times-backend.herokuapp.com/topics")

//axios.get('https://api.github.com/users/Jobsy')
.then(response => {
  console.log(response)
  const res = response.data.topics;
  res.unshift("all");
  console.log(res);
  res.forEach(element => {


      tabMaker(element);

      
  });
  
  
})
.catch(error => {
 console.error(error)
});

// }
// const listFollowers = followersArray.map(function ( e,index, arr) {
//   follower(arr[index])
// });

// response.data.topics.forEach(people => tab.peoples);