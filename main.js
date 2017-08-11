// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

console.log("Talking");

let searchResultsArray = [];
let input = document.querySelector('input');
let button = document.querySelector('button')
let url = "https://itunes.apple.com/search?term=";

console.log(input);

// listen for enter found at https://stackoverflow.com/questions/14542062/eventlistener-enter-key
input.addEventListener('keydown',(e)=>{
  if (e.keyCode === 13){
  console.log(input.value);
  fetchSearchResults();
  }
})
button.addEventListener('click',(e)=>{
  console.log(input.value);
  fetchSearchResults();
});
//
// // fetch input.value from recipepuppy proxy api
function fetchSearchResults(){
  fetch(url+input.value)
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
//
// // populateSearchResults dot maps through the searchResultsArray creating resultCard(s).
function populateSearchResults(){
  let searchResultsSection = document.querySelector('.results');
  // remove existing child elements from searchResultsSection, found at https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  while (searchResultsSection.firstChild) {
    searchResultsSection.removeChild(searchResultsSection.firstChild);
  }
  searchResultsArray.map((i)=>{
    let resultCard = document.createElement('div');
    resultCard.innerHTML = `
      <img src=${i.artworkUrl100}></img>\n
      <h3>${i.artistName}</h3>\n
      <h4>${i.kind}</h4>\n
      <a href=${i.previewUrl}>Preview</a>\n
    `;
    resultCard.setAttribute('class','resultCard')

    searchResultsSection.appendChild(resultCard);
  })
}
