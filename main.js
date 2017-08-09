let searchResultsArray = [];
let input = document.querySelector('input');


// listen for enter found at https://stackoverflow.com/questions/14542062/eventlistener-enter-key
input.addEventListener('keydown',(e)=>{
  if(13===e.keyCode){
  console.log(input.value);
  fetchSearchResults();
  }
});

// fetch input.value from recipepuppy proxy api
function fetchSearchResults(){
  fetch("http://recipepuppyproxy.herokuapp.com/api/?i="+input.value)
    .then((response)=>{
      // I do not have a firm grasp on line 18, why is it structured that way?
      response.json().then((data)=>{
        console.log("JSON is working");
        console.log(data.results);
        searchResultsArray=data.results;
        populateSearchResults();
      })
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
}

// populateSearchResults dot maps through the searchResultsArray creating resultCard(s).
function populateSearchResults(){
  let searchResultsSection = document.querySelector('.search_results');
  //console.log(searchResultsSection);
  searchResultsArray.map((i)=>{
    let resultCard = document.createElement('div');
    resultCard.innerHTML = `
      <img src=${i.thumbnail}></img>\n
      <h3>${i.title}</h3>\n
      <h4>${i.ingredients}</h4>\n
      <a href=${i.href}>${i.href}</a>\n
    `;

    searchResultsSection.appendChild(resultCard);
  })
}
