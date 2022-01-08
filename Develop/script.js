// Assignment code here

// criteria prompts
// length of password?
function passwordLength(){
  var passLength = window.prompt("How many characters will the password have: Enter a number between 8 to 128.");
    // change string from prompt to int
    passLength = parseInt(passLength);

    if(passLength >= 8 || passLength <= 128){
      console.log("include password length to be " + passLength);
    }
    else{
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordLength();
    }
};

// password to include lowercase?
function passwordLower(){
  var lowerChars = window.prompt("Do you want to include lowercase characters? Enter 1 for YES or 2 for NO.");
    // change string from prompt to int
    lowerChars = parseInt(lowerChars);

    if(lowerChars === 1){
      console.log("include lowercase characters");
    }
    else if(lowerChars === 2){
      console.log("do not include lowercase characters");
    }
    else{
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordLower();
    }
};

// password to include uppercase?
function passwordUpper(){
  var upperChars = window.prompt("Do you want to include uppercase characters? Enter 1 for YES or 2 for NO.");
    // change string from prompt to int
    upperChars = parseInt(upperChars);

    if(upperChars === 1){
      console.log("include uppercase characters");
    }
    else if(upperChars === 2){
      console.log("do not include uppercase characters");
    }
    else{
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordUpper();
    }   
};

// password to include numbers?
function passwordNum(){
  var numChars = window.prompt("Do you want to include numeric characters? Enter 1 for YES or 2 for NO.");
    // change string from prompt to int
    numChars = parseInt(numChars);

    if(numChars === 1){
      console.log("include numeric characters");
    }
    else if(numChars === 2){
      console.log("do not include numeric characters");
    }
    else{
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordNum();
    }
};

// password to include special characters?
function passwordSpec(){
  var SpecChars = window.prompt("Do you want to include special characters? Enter 1 for YES or 2 for NO.");
    // change string from prompt to int
    SpecChars = parseInt(SpecChars);

    if(SpecChars === 1){
      console.log("include special characters");
    }
    else if(SpecChars === 2){
      console.log("do not include special characters");
    }
    else{
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordSpec();
    }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passLength = passwordLength();
  var passLower = passwordLower();
  var passUpper = passwordUpper();
  var passNum = passwordNum();
  var passSpec = passwordSpec();
  



  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
