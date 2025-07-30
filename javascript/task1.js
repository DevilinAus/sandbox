const specialCharacters = ['$', '%', '@', '^', '*', '!']
// Link the JavaScript with the DOM elements
const userLength = document.getElementById("lengthInput");
const numbersCheck = document.getElementById("includeNumbersChBox"); 
const specialCheck = document.getElementById("includeSpecialChBox"); 
const outputDiv = document.getElementById("output");

// Add an event listener to the generate button.
generateBtn.addEventListener("click", function () {
    // Length is the value used further down in the generator
    // Number() is a JS function that will try convert the value into a number
    // passwordLength is the const from above that's mapped to the DOM element
    let length = Number(userLength.value);
    let includeNumbers = numbersCheck.checked;
    let includeSpecial = specialCheck.checked;
    generatePassword(length, includeNumbers, includeSpecial)
})

function generatePassword(passwordLength, includeNumbers, includeSpecial) {
    let password = []
    const ALPHABET_CHAR_COUNT = 26;
    const ASCII_OFFSET = 97;
    const PASSWORD_ONE_THIRD = 1/3;
    for (let i = 0; i < passwordLength; i++) {
        let generated = (Math.random()*ALPHABET_CHAR_COUNT);
        let value = Math.floor(generated);
        let randomCapital = Math.floor(Math.random() * 2);
        let valueStr = String.fromCharCode(ASCII_OFFSET + value);

        if (randomCapital) {
            password.push(valueStr.toUpperCase());
        } else {
            password.push(valueStr);
        }
    }

    let availablePositions = [...Array(passwordLength).keys()];

    if (includeNumbers) {
        const numbersMin = 1;
        const numbersMax = Math.floor(passwordLength * PASSWORD_ONE_THIRD);
        const numbersCount = Math.floor(Math.random() * (numbersMax - numbersMin + 1)) + numbersMin;

        for (let i = 0; i < numbersCount; i++) {
            let position = pickRandomFrom(availablePositions)
            let whichNumber = Math.floor(Math.random() * passwordLength);
            password[position] = whichNumber;
            availablePositions = availablePositions.filter(i => i !== position)
            console.log(availablePositions)
        }
    }

    if (includeSpecial) {
        const specialMin = 1;
        const specialMax = Math.floor(passwordLength * PASSWORD_ONE_THIRD);
        const specialCount = Math.floor(Math.random() * (specialMax - specialMin + 1)) + specialMin;

        for (let i = 0; i < specialCount; i++) {
            let position = pickRandomFrom(availablePositions)
            let whichSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
            password[position] = whichSpecial;
            availablePositions = availablePositions.filter(i => i !== position)
            console.log(availablePositions)
        }

    }

    let passwordStr = password.join('');
    outputDiv.innerText = passwordStr;

}

function pickRandomFrom(availablePositions) {
    let arrayLength = availablePositions.length;
    let randomIndex = Math.floor(Math.random() * arrayLength)
    return availablePositions[randomIndex]
}