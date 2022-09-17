var generateBtn = document.querySelector("#generate");


var specialCharactersArr = ['!','@','#','$','%','^','&','*','(',')','<','>','?','/','~'];

var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbersArr = ['0','1','2','3','4','5','6','7','8','9'];

var choiceArr = [];




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword(){
 var password ="";

 var length = prompt("How many characters would you like your password to be? (between 8-128");
 if(isNaN(length))
 alert("Invalid Response. Please choose a number value")


var uppercase = confirm("Would you like uppercase letters in your password?");
  var lowercase = confirm("Would you like lowercase letters in your password?");
  var numerical = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters in your password?");

  if(uppercase){
    choiceArr += uppercaseArr
  }
  if(lowercase){
    choiceArr += lowercaseArr
  }

  if(numerical) {
    choiceArr += numbersArr
  }

  if(special) {
    choiceArr += specialCharactersArr
  }

  for (var i = 0; i < length; i++) {
    password += choiceArr.charAt(Math.floor(Math.random() * choiceArr.length));
  }


}

















// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// var characterLength = 8;

// var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','<','>','?','/','~'];

// var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// var numbers = ['0','1','2','3','4','5','6','7','8','9'];

// var choice = [];


// function generatePassword(){
//  var password ="";
//  for(var i = 0; i < characterLength; i++){
//   var randomLetter = Math.floor(Math.random() * choice.length)
//   password = password + choice[randomLetter]

//  }
//  return password
// };

// function Criteria(){
// characterLength = parseInt(prompt('How many characters should password be?(Between 8 - 128 characters)'))
// if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
// alert("Invalid Response")
// return false
// }

// if (confirm("Special Characters in Password?"))



// }






// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input
// function writePassword() {
//   Criteria();
//   var newPassword = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = newPassword;}
