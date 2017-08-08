let searchResultsArray = ["a","b"];
let input = document.querySelector('input');



// listen for enter found at https://stackoverflow.com/questions/14542062/eventlistener-enter-key
input.addEventListener('keydown',(e)=>{
  if(13===e.keyCode){
  console.log(input.value);
  populateSearchResults();
  }
});

// populateSearchResults dot maps through the searchResultsArray creating resultCard(s).
function populateSearchResults(){
  let searchResultsSection = document.querySelector('.search_results');
  //console.log(searchResultsSection);
  searchResultsArray.map((i)=>{
    let resultCard = document.createElement('div');
    resultCard.innerHTML = i;
    searchResultsSection.appendChild(resultCard);
  })
}
