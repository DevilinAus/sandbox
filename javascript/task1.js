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
    for (let i = 0; i < passwordLength; i++) {
        generated = (Math.random()*26);
        value = Math.floor(generated);
        randomCapital = Math.floor(Math.random() * 2);
        valueStr = String.fromCharCode(97 + value);

        if (randomCapital) {
            password.push(valueStr.toUpperCase());
        } else {
            password.push(valueStr);
        }
    }

    if (includeNumbers) {
        const numbersMin = 1;
        const numbersMax = Math.floor(passwordLength * 0.33);
        const numbersCount = Math.floor(Math.random() * (numbersMax - numbersMin + 1)) + numbersMin;

        for (let i = 0; i < numbersCount; i++) {
            let position = Math.floor(Math.random() * passwordLength);
            let whichNumber = Math.floor(Math.random() * passwordLength);
            password[position] = whichNumber;
        }
    }

    if (includeSpecial) {
        const specialMin = 1;
        const specialMax = Math.floor(passwordLength * 0.33);
        const specialCount = Math.floor(Math.random() * (specialMax - specialMin + 1)) + specialMin;

        for (let i = 0; i < specialCount; i++) {
            let position = Math.floor(Math.random() * passwordLength);
            let whichSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
            password[position] = whichSpecial;
        }

    }

    passwordStr = password.join('');
    outputDiv.innerText = passwordStr;

}
// Note - there's a rare bug were the specials rolls the same amount (or higher) of items as the numbers, and then also pick the same
// places and overwrite all the numbers in the password, meaning the numbers True option can result in generated password with no numbers.
// I'd solve this by checking the final output and generating again if this happened. 


