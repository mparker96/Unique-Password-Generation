// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var specialCharacters = " !\"#$%&'()*+,-./:;`{|}~<=>?@[]^_";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  event.preventDefault();
}
;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercaseLett = confirm(
  "Do you want your password to contain lowercase letters?"
);
var uppercaseLett = confirm(
  "Do you want your password to contain uppercase letters?"
);
var num = confirm("Do you want your password to contain numbers?");
var specialChar = confirm(
  "Do you want your password to contain special characters?"
);
var passwordLength = prompt(
  "Choose a password length of at least 8 characters and no more than 128 characters."
);

