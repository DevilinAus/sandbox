const searchInput = document.getElementById("searchInput")


searchForm.addEventListener("submit", function () {
    let userInput = searchInput.value;
    console.log(`user searched for ${userInput}`)
    fetch(`http://localhost:3000/search?q=${userInput}`)

})
