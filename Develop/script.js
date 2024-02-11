// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function generatePassword(length) {
  var length = Number(prompt("Enter password length"))
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*&%$#@!"
  var password = "";
  

  // passwordText.value = password;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
//still working....  
//how to refresh the page automatically?

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  var passwordLength = 8;
  var newPassword = generatePassword(passwordLength);
  passwordText.value = newPassword;
  console.log(newPassword);
});
