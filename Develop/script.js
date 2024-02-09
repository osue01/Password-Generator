// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*&%$#@!"
  var password = "";
  

  // passwordText.value = password;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

var passwordLength = 8;
  var newPassword = generatePassword(passwordLength);
  passwordText.value = newPassword;
  console.log(newPassword);


//still working....  
//how to refresh the page automatically?
//Uncaught TypeError: EventTarget.addEventListener: Argument 2 is not an object.



// Add event listener to generate button
generateBtn.addEventListener("click", newPassword);
