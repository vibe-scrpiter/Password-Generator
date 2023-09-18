let generateBtn= Document.querySelector("generate");
let specialChar = "!@#$%^&*()-=_+";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890"

function CheckPassLen() {
    let passwordLen = parseInt(prompt("how long should we make the password? (8-128 characters"));
    confirm("you have selected" + passwordLen +  "characters.");
    if (passwordLen > 128) {
        alert("Too many characters selected. Please select between 8 and 128.");
        CheckPassLen();
    } else if (passwordLen < 8) {
        alert("Too few characters selected. Please select between 8 and 128.");
    }
    return passwordLen;
}


function CheckPassLen() {
    let specialChar = prompt("would you like to include special characters into the password? Type yes or no.");
    confirm("you have selected" + specialChar + "for special characters");
    if (specialChar === "yes") {
        console.log("special characters selected.");
    } else if (specialChar === "no") {
        console.log ("do not include special characters.");
    } else {
        alert("please enter y or n to choose.");
        CheckPassLen();
    }
    return specialChar;
}

function CheckNumber() {
    let numbers = prompt("Would you like to include numbers into the password? Type y or n.");
    confirm("You have selected " + numbers + " for numbers.");
    if (numbers === "yes") {
        console.log("Numbers selected.");
    } else if (numbers === "no") {
        console.log('No numbers selected.');
    } else {
        alert("Please enter yes or no to choose.");
        CheckNumber();
    }
    return numbers;
}