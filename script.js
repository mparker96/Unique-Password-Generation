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
  document.textarea.innerHTML = ''
}

generateBtn.addEventListener("click", writePassword);


function generatePassword(event){
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















