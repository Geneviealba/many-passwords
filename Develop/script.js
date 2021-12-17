// Assignment Code
var password = document.querySelector ("#password");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordValue = '';
// passwordText.value = password;
const createPassword= ()=> {
  var passwordLength = prompt("How long would you like your password to be? (8-128)");
  if(passwordLength < 8) {
    alert("at least eight characters");
    return null;
  }
  if(passwordLength >128) {
    alert("no more than one hundred twenty-eight");
    return null;
  }

  var characters = "";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = upperCase.toLowerCase();
  var numbers = "1234567890"
  var specialCharacters = "!@#$%^&*+"
  

  var confirmUpper = confirm("Would you like to include uppercase?");
  var confirmLower = confirm("Would you like to include lowercase?");
  var confirmNumbers = confirm("Would you like to include numbers?");

  if(confirmUpper === true) {
    characters = characters + upperCase
  }

  if(confirmLower === true) {
    characters = characters + lowerCase
  }
  
  if(confirmNumbers === true) {
    characters = characters + numbers
  }
  else if (specialCharacters === true) {
    characters = characters + specialCharacters
  }

  console.log(characters)

  passwordValue = '';
  for (let i = 0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number + 1);
  
  password.value = passwordValue;
  }
}

  // Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
