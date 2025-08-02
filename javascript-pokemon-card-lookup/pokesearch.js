const searchInput = document.getElementById("searchInput");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const topDiv = document.getElementById("topCounter")
const containerDiv = document.getElementById("mainContainer")
const imageDiv = document.getElementById("cardArt")
const selectCardButton = document.getElementById("selectCardButton")


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

    topDiv.style.display = "flex"
    containerDiv.style.display = "flex"
    leftButton.style.display = "inline-block";
    rightButton.style.display = "inline-block";
    selectCardButton.style.display = "inline-block";

    updateButtonStates()
};

function updateButtonStates() {
    
    if (currentIndex === 0) {
        leftButton.style.display = "none";
    } else {
        leftButton.style.display = "inline-block";
    }

    if (currentIndex === imagesArray.length - 1) {
        rightButton.style.display = "none";
    } else {
        rightButton.style.display = "inline-block";
    }
}