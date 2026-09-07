
// Get HTML Elements

const passwordInput = document.getElementById("password");

const copyButton = document.getElementById("copy-btn");

const lengthInput = document.getElementById("length");

const lengthValue = document.getElementById("length-value");

const uppercaseCheckbox =
    document.getElementById("uppercase");

const lowercaseCheckbox =
    document.getElementById("lowercase");

const numbersCheckbox =
    document.getElementById("numbers");

const symbolsCheckbox =
    document.getElementById("symbols");

const strengthElement =
    document.getElementById("strength");

const generateButton =
    document.getElementById("generate-btn");


// Character Sets

const uppercaseLetters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseLetters =
    "abcdefghijklmnopqrstuvwxyz";

const numberCharacters =
    "0123456789";

const symbolCharacters =
    "!@#$%^&*()_+-=[]{}|;:,.<>?";


// Update Length

lengthInput.addEventListener("input", () => {

    lengthValue.textContent =
        lengthInput.value;

});


// Generate Password

function generatePassword() {

    const length =
        Number(lengthInput.value);

    let characters = "";

    // Add selected character types

    if (uppercaseCheckbox.checked) {
        characters += uppercaseLetters;
    }

    if (lowercaseCheckbox.checked) {
        characters += lowercaseLetters;
    }

    if (numbersCheckbox.checked) {
        characters += numberCharacters;
    }

    if (symbolsCheckbox.checked) {
        characters += symbolCharacters;
    }


    // Check if nothing is selected

    if (characters.length === 0) {

        passwordInput.value =
            "Select an option";

        strengthElement.textContent =
            "None";

        return;
    }


    // Generate password

    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(
                Math.random() * characters.length
            );

        password +=
            characters[randomIndex];
    }


    passwordInput.value = password;


    // Update strength

    updateStrength(length, characters.length);
}


// Password Strength

function updateStrength(length, characterCount) {

    if (length < 8 || characterCount < 20) {

        strengthElement.textContent =
            "Weak";

    }

    else if (length < 12 || characterCount < 50) {

        strengthElement.textContent =
            "Medium";

    }

    else {

        strengthElement.textContent =
            "Strong";
    }
}


// Copy Password

copyButton.addEventListener("click", async () => {

    const password =
        passwordInput.value;

    if (!password) {
        return;
    }


    await navigator.clipboard.writeText(password);


    copyButton.textContent = "Copied!";


    setTimeout(() => {

        copyButton.textContent = "Copy";

    }, 1500);

});


// Generate Button

generateButton.addEventListener(
    "click",
    generatePassword
);


// Generate Password Initially

generatePassword();

