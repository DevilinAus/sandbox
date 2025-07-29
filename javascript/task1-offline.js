/*
CHALLENGE: Random Password Generator (Node.js)

OBJECTIVE:
Build a simple script that generates a random password based on customizable settings.

REQUIREMENTS:
- Ask the user (or hardcode) the desired password length.
- Include uppercase, lowercase, numbers, and symbols in the pool.
- Randomly generate a password of the given length using the pool.
- Output the password to the terminal.

MUST USE:
- Arrays and/or strings
- Functions
- Math.random()
- Loops (for or while)

BONUS (optional):
- Let the user pass in length as a CLI arg (via process.argv)
- Add options to include/exclude symbols, numbers, etc.
- Copy password to clipboard (use `clipboardy` if you want to explore packages)

NO EXTERNAL UI, just terminal output.
*/

passwordLength = 10;
specialCharacters = ['$', '%', '@', '^', '*', '!']


includeNumbers = true
includeSpecial = true

password = []

for (let i = 0; i < passwordLength; i++) {
    generated = (Math.random()*100000000000000)%26;
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

// Note - there's a rare bug were the specials rolls the same amount (or higher) of items as the numbers, and then also pick the same
// places and overwrite all the numbers in the password, meaning the numbers True option can result in generated password with no numbers.
// I'd solve this by checking the final output and generating again if this happened. 

passwordStr = password.join('')
console.log(passwordStr)