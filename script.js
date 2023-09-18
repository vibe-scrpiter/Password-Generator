let generateBtn= document.querySelector("#generate");
let specialChar = "!@#$%^&*()-=_+";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890"

function CheckPassLen() {
    let passwordLen = parseInt(prompt("how long should we make the password? (8-128 characters"));
    confirm("you have selected " + passwordLen +  " characters.");
    if (passwordLen > 128) {
        alert("Too many characters selected. Please select between 8 and 128.");
        CheckPassLen();
    } else if (passwordLen < 8) {
        alert("Too few characters selected. Please select between 8 and 128.");
    }
    return passwordLen;
}


function CheckSpecChar() {
    let specialChar = prompt("Would you like to include special characters into the password? Type yes or no.");
    confirm("You have selected " + specialChar + " for special characters");
    if (specialChar === "yes") {
        console.log("Special characters selected.");
    } else if (specialChar === "no") {
        console.log ("Special characters not included");
    } else {
        alert("enter yes or no to choose.");
        CheckPassLen();
    }
    return specialChar;
}

function CheckNumber() {
    let numbers = prompt("Would you like to include numbers into the password? Type yes or no.");
    confirm("You have selected " + numbers + " for numbers.");
    if (numbers === "yes") {
        console.log("Numbers selected.");
    } else if (numbers === "no") {
        console.log('no numbers included in password');
    } else {
        alert("enter yes or no to choose.");
        CheckNumber();
    }
    return numbers;
}

function CheckCaseLow() {
    let lowerCase = prompt("Would you like to include lower case letters in the password? Type yes or no");
    confirm("You have selected " + lowerCase + " lower case letters.");
    if (lowerCase === "yes") {
        console.log("Lower case letters selected");
    } else if (lowerCase === "no") {
    console.log("Lower case letters not included");
    } else {
        alert("enter yes or no to choose.");
        CheckCaseLow();
    }
    return lowerCase;
}

function CheckCaseUpper() {
    let upperCase = prompt("do you want to include upper case letters in the password? Type yes or no.");
    confirm("You have selected " + upperCase + " upper case letters.")
    if (upperCase === "yes") {
        console.log("Upper case letters selected.")
    } else if (upperCase === "no") {
        console.log("Upper case letters not included.");
    } else {
        alert("please enter yes or no to choose.");
        CheckCaseUpper();
    }
    return upperCase;
}

function WritePassword() {
    let password = GeneratePassword();
    let passwordText = document.querySelector("#password")

    passwordText.value = password;
}

function GeneratePassword() {
    let choiceIndex = [CheckPassLen(), CheckSpecChar(), CheckCaseUpper(), CheckCaseLow(), CheckNumber()];
    let characters = "";
    let password = "";
    if (choiceIndex[1] === "yes") {
        characters = characters + specialChar;
    }
    if (choiceIndex[2] === "yes") {
        characters = characters + upperCase;
    }
    if (choiceIndex[3] === "yes") {
        characters = characters + lowerCase;
    }
    if (choiceIndex[4] === "yes") {
        characters = characters + numbers;
    }

    for (let i = 0; i < choiceIndex[0]; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password = password + characters[randomIndex];
    }
    return password;
}
generateBtn.addEventListener("click", WritePassword);