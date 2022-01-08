// criteria prompt functions
// length of password?
function passwordLength(){
  var passLength = window.prompt("How many characters will the password have: Enter a number between 8 to 128.");
    // change string from prompt to int
    passLength = parseInt(passLength);

    if(passLength >= 8 && passLength <= 128){
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
      return lowerChars;
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
      return upperChars;
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
      return numChars;
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
      return SpecChars;
    }
    else{
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordSpec();
    }
};


// functions to generate random characters
// random lowercase characters
function randomLower(){
  var lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var lower = Math.floor(Math.random() * 26) + 1;
  return lowerAlpha[lower];
};

// random uppercase characters
function randomUpper(){
  var upperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var upper = Math.floor(Math.random() * 26) + 1;
  return upperAlpha[upper];
};

// random numeric characters
function randomNum(){
  var numAlpha = ['0','1','2','3','4','5','6','7','8','9'];
  var num = Math.floor(Math.random() * 10) + 1;
  return numAlpha[num];
};

// random special characters
function randomSpec(){
  var specAlpha = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@',']','\',','[','^','_','`','{','|','}','~'];
  var spec = Math.floor(Math.random() * 32) + 1;
  return specAlpha[spec];
};


// global variable x
var x = 0;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var passwordText = document.querySelector("#password");

  // get criteria from prompt functions
  var pwle = passwordLength();
  var pwlo = passwordLower();
  var pwu = passwordUpper();
  var pwn = passwordNum();
  var pws = passwordSpec();

  // have variable for password replacement
  var password = "password12password12password12password12password12password12password12password12password12password12password12password12password";

  // replace function *credits to https://www.techiedelight.com/replace-character-specified-index-javascript/
  String.prototype.replaceAt = function(index, replacement){
    if (index >= this.length) {
        return this.valueOf();
    }
 
    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
    }
 
  // function to generate what password-x will be
  function whatChar(){
    var char = Math.floor(Math.random() * 4) + 1;
    var letter = "";
    switch (char){
      case 1:
        if(pwlo === 1){
          letter = randomLower();
          password = password.replaceAt(x, letter);
          return password;  
        }
        else if(pwlo === 2){
          return whatChar();
        }

      case 2:
        if(pwu === 1){
          letter = randomUpper();
          password = password.replaceAt(x, letter);
          return password;
        }
        else if(pwu === 2){
          return whatChar();
        }

      case 3:
        if(pwn === 1){
          letter = randomNum();
          password = password.replaceAt(x, letter);
          return password;
        }
        else if(pwn === 2){
          return whatChar();
        }

      case 4:
        if(pws === 1){
          letter = randomSpec();
          password = password.replaceAt(x, letter);
          return password;
        }
        else if(pws === 2){
          return whatChar();
        }
    }
  };

  // for loop to replace each char for password
  for(x; x < pwle; x++){
    //debugger;
    password[x] = whatChar();
  };
  
  // slice rest of string off for password
  if(x === pwle){
    console.log(password);
    password = password.slice(0,pwle);
    console.log(password);
  };

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
