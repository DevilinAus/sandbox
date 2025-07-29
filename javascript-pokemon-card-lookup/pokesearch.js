const searchInput = document.getElementById("searchInput");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const topDiv = document.getElementById("topCounter");
const imageDiv = document.getElementById("cardArt");
let imagesArray = [];
let currentIndex = 0;
let currentLength = 0;



searchForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let userInput = searchInput.value;
    console.log(`user searched for ${userInput}`)
    requestCards(userInput)
    

})

leftButton.addEventListener("click", function(){
    if (currentIndex === 0) return;
    currentIndex = currentIndex - 1;
    topDiv.innerHTML = `<p>${currentIndex+1} of ${currentLength}</p>`
    imageDiv.innerHTML = `<img src=${imagesArray[currentIndex]} width="300" />`
    updateButtonStates()
})

rightButton.addEventListener("click", function(){
    if (currentIndex === imagesArray.length - 1) return
    currentIndex = currentIndex + 1;
    topDiv.innerHTML = `<p>${currentIndex+1} of ${currentLength}</p>`
    imageDiv.innerHTML = `<img src=${imagesArray[currentIndex]} width="300" />`
    updateButtonStates()
})

async function requestCards(searchTerm) {
    const cardDataResponse = await fetch(`http://localhost:3000/search?q=${searchTerm}`);
    const cardData = await cardDataResponse.json()
    imagesArray = cardData.data.map(card => card.images.large);
    currentLength = imagesArray.length

    setFirstImage(imagesArray);
};

function setFirstImage (imagesArray) {
    console.log(imagesArray[0])
    topDiv.innerHTML = `<p>${currentIndex+1} of ${currentLength}</p>`
    imageDiv.innerHTML = `<img src=${imagesArray[0]} width="300" />`
    updateButtonStates()
};

function updateButtonStates() {
    // Don't read this with python brain the right hand side returns true of false. 
    // .disabled is built into HTML, when we're at the limit it sets the button to disabled
    // automatically undisables itself once they return false. 
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex === imagesArray.length - 1;
}