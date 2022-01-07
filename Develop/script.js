// Assignment code here

// criteria prompts
// length of password?
function passwordLength(){
  var passLength = window.prompt("How many characters will the password have: Enter a number between 8 to 128.");
    console.log(passLength);

    if(passLength === 1){
      
    }
    else if(passLength === "" || passLength === null){
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordLength();
    }
    else{
      break;
    }

}


// password to include lowercase?
function passwordLower(){
  var lowerChars = window.prompt("Do you want to include lowercase characters? Enter 1 for YES or 2 for NO.");
    console.log(lowerChars);
      if(lowerChars === 1){
        
      }
      else if(lowerChars === "" || lowerChars === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return passwordLower();
      }
      else{
        break;
      }
}
  

// password to include uppercase?
function passwordUpper(){
  var upperChars = window.prompt("Do you want to include uppercase characters? Enter 1 for YES or 2 for NO.");
    console.log(upperChars);
    if(upperChars === 1){
      
    }
    else if(upperChars === "" || upperChars === null){
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordUpper();
    }
    else{
      break;
    }
}


// password to include numbers?
function passwordNum(){
  var numChars = window.prompt("Do you want to include numeric characters? Enter 1 for YES or 2 for NO.");
    console.log(numChars);
    if(numChars === 1){
      
    }
    else if(numChars === "" || numChars === null){
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordNum();
    }
    else{
      break;
    }

}

// password to include special characters?
function passwordSpec(){
  var SpecChars = window.prompt("Do you want to include special characters? Enter 1 for YES or 2 for NO.");
  console.log(SpecChars);
    if(SpecChars === 1){
      
    }
    else if(SpecChars === "" || SpecChars === null){
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordSpec();
    }
    else{
      break;
    }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
