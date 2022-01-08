// Assignment code here

// criteria prompts
// length of password?
function passwordLength(){
  var passLength = window.prompt("How many characters will the password have: Enter a number between 8 to 128.");
    // change string from prompt to int
    passLength = parseInt(passLength);

    if(passLength >= 8 || passLength <= 128){
      console.log("include password length to be " + passLength);
      return passLength;
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
      return lowerChars;
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
      return upperChars;
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
      return numChars;
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
      return SpecChars;
    }
    else if(SpecChars === 2){
      console.log("do not include special characters");
    }
    else{
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordSpec();
    }
};


// functions to generate random characters
// random lowercase characters
function randomLower(x){
  var lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var lower = Math.floor(Math.random() * 26) + 1;
  password[x] = lowerAlpha[lower];
};

// random uppercase characters
function randomUpper(x){
  var upperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var upper = Math.floor(Math.random() * 26) + 1;
  password[x] = upperAlpha[upper];
};

// random numeric characters
function randomNum(x){
  var numAlpha = ['0','1','2','3','4','5','6','7','8','9'];
  var num = Math.floor(Math.random() * 10) + 1;
  password[x] = numAlpha[num];
};

// random special characters
function randomSpec(x){
  var specAlpha = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@',']','\',','[','^','_','`','{','|','}','~'];
  var spec = Math.floor(Math.random() * 32) + 1;
  password[x] = specAlpha[spec];
};


// function to generate what password-x will be
function whatChar(){
  var char = Math.floor(Math.random() * 4) + 1;
  switch (char){
    case 1:
      password[x] = randomLower();
      return password[x];

    case 2:
      password[x] = randomUpper();
      return password[x];

    case 3:
      password[x] = randomNum();
      return password[x];

    case 4:
      password[x] = randomSpec();
      return password[x];

    default:
      console.log("error");
      break;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var pwl = passwordLength();

  for(var i = 0; i < pwl; i++){
    
    for(var j = 0; j < pwl; j++){
      // choose what kind of char x will be
      password[x] = whatChar();
    }

  }



  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
