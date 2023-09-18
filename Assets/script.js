let generateBtn= Document.querySelector("generate");
let specialChar = "!@#$%^&*()-=_+";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890"

function CheckPassLen() {
    let passwordLen = parseInt(prompt('how long should we make the password? (8-128 characters'));
    confirm('you have selected' + passwordLen + ' characters.');
    if (passwordLen > 128) {
        alert('Too many characters selected. Please select between 8 and 128.');
        CheckPassLen();
    } else if (passwordLen < 8) {
        alert('Too few characters selected. Please select between 8 and 128.');
    }
    return passwordLen;
}
