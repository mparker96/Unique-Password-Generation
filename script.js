var generateBtn = document.querySelector("#generate");

// These variables contain the possible choices for a randomly generated password
var specialCharactersArr = ['!','@','#','$','%','^','&','*','(',')','<','>','?','/','~'];

var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbersArr = ['0','1','2','3','4','5','6','7','8','9'];

var choiceArr = [];


// This function calls for the password to be written based on the criteria selected in the generatePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // document.getElementById("#password").innerHTML = "";
  console.log(password)
}
// The event listener waits for a click on the button element to run the write password function
generateBtn.addEventListener("click", writePassword);


function generatePassword(event){
 var password ="";
// this variable allows the user to select how many characters they would like in their generated password between 8 and 128 characters
 var length = prompt("How many characters would you like your password to be? (between 8-128");
 // if the input is not a number(NaN), then this returns to the starting postition of the function 
 if(isNaN(length)){
   alert("Invalid Response. Please choose a number value")
  //return generatePassword()
 }
 // if the input is not within the designated range, this returns the function to the starting position
  if (length < 8 || length > 128){
    alert("Invalid Response. Please choose a number between 8-128")
    //return generatePassword()
  }
 

// These variables contain confirm messages to choose which criteria should be included in the generated password
var uppercase = confirm("Would you like uppercase letters in your password?");
  var lowercase = confirm("Would you like lowercase letters in your password?");
  var numerical = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters in your password?");

  // the if statements push to the choiceArr based on if the selected criteria is true or false. 
  if(uppercase === true){
    choiceArr.push(...uppercaseArr) 
    console.log(choiceArr)
  }
  if(lowercase === true){
    choiceArr.push(...lowercaseArr)
    console.log(choiceArr)
  }

  if(numerical === true)  {
    choiceArr.push(...numbersArr)
    console.log(choiceArr)
  }

  if(special === true) {
    choiceArr.push(...specialCharactersArr)
    console.log(choiceArr)
  }
  // This for loop and random number generator randomly chooses the contents of the password based on the criteria selected and the length chosen.
  for (var i = 0; i <= length - 1; i++) {
    var randomNumber = Math.floor(Math.random() * choiceArr.length)
    password += choiceArr[randomNumber];
  }
  // This returns the password to the writePassword function to give the generated password
    return password
}














