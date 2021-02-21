// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = 0;
function writePassword2() {

  // PROMPT FOR PW LENGTH BETWEEN 8 AND 28
  var ask = "true";
  while (ask) {
    var pwLength = prompt("Enter password length (8-128 characters): ", "8 - 128");
    if (lc === null) {
      ask = false;
      break;
    };
    if (pwLength >= 8 && pwLength <= 128) {
      ask = false;
    };
  };

  // LOWER CASE CHARACTERS?
  var lc = confirm("Do you want to include lower case chars? (Cancel = No)");

  // UPPER CASE CHARACTERS?
  var uc = confirm("Do you want to include upper case chars? (Cancel = No)");

  // NUMERIC CHARACTERS?
  var nu = confirm("Do you want to include numeric chars? (Cancel = No)");

  // SPECIAL CHARACTERS?
  var sp = confirm("Do you want to include special chars? (Cancel = No)");

  var ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ucArray = Array.from(ucChars);
  var lcChars = "abcdefghijklmnopqrstuvwxyz";
  var lcArray = Array.from(lcChars);
  var nuChars = "0123456789";
  var nuArray = Array.from(nuChars);
  var spChars = "@%+\/'!#$^?:,)(}{][~-_.";
  var spArray = Array.from(spChars);

  var incChars = "";
  if (lc == true) {
    incChars = lcChars;
  };
  if (uc == true) {
    incChars += ucChars;
  };
  if (nu == true) {
    incChars += nuChars;
  };
  if (sp == true) {
    incChars += spChars;
  };
  console.log(incChars);

  var newPW = "";
  for (var i = 0; i < pwLength; i++) {
    newPW += incChars.charAt(Math.floor(Math.random() * incChars.length));
    console.log(pwLength);
  }

  // Now see if the random newPW includes all the required segements and if not re-generate
  var pwOK = false;
  //Check for lc
  if (lc == true) {
    //iterate through each char of newPW and see if it is in lcChars
    //while check = true take charAt(i=1 to newPW.length)
    console.log("gonna check for lower case chars!");
    var checkLetter = "";
    var i;
    for (i = 0; i < newPW.length; i++) {
      checkLetter = newPW.charAt(i);
      if (lcArray.indexOf(checkLetter) > -1) {
        lcGood = true;
        i = newPW.length;
      } else {
        lcGood = false;
      }
      console.log("lcGood: " + lcGood);
    };
  };
  //Check for UC
  if (uc == true) {
    //iterate through each char of newPW and see if it is in lcChars
    //while check = true take charAt(i=1 to newPW.length)
    console.log("gonna check for upper case chars!");
    var checkLetter = "";
    var i;
    for (i = 0; i < newPW.length; i++) {
      checkLetter = newPW.charAt(i);
      if (ucArray.indexOf(checkLetter) > -1) {
        ucGood = true;
        i = newPW.length;
      } else {
        ucGood = false;
      }
      console.log("ucGood: " + ucGood);
    };
  };
//Check for Numeric
if (nu == true) {
  //iterate through each char of newPW and see if it is in lcChars
  //while check = true take charAt(i=1 to newPW.length)
  console.log("gonna check for numeric chars!");
  var checkLetter = "";
  var i;
  for (i = 0; i < newPW.length; i++) {
    checkLetter = newPW.charAt(i);
    if (nuArray.indexOf(checkLetter) > -1) {
      nuGood = true;
      i = newPW.length;
    } else {
      nuGood = false;
    }
    console.log("nuGood: " + nuGood);
  };
};
//Check for Special Characters
if (sp == true) {
  //iterate through each char of newPW and see if it is in lcChars
  //while check = true take charAt(i=1 to newPW.length)
  console.log("gonna check for special chars!");
  var checkLetter = "";
  var i;
  for (i = 0; i < newPW.length; i++) {
    checkLetter = newPW.charAt(i);
    if (spArray.indexOf(checkLetter) > -1) {
      spGood = true;
      i = newPW.length;
    } else {
      spGood = false;
    }
    console.log("spGood: " + spGood);
  };
};
if (lcGood == false || ucGood == false || nuGood == false || spGood == false) {
  pwOK = false;
  alert("Oh boy. The password does not meet all of your requirements. It would be best to generate a new one.");
} else {
  alert("Your new pasword meets all of your requirements! Click OK to see it.");
}

    var passwordText = document.querySelector("#password");
    console.log(passwordText);
    passwordText.setAttribute("placeholder", newPW);
    return
  }

  function writePassword() {
    console.log("button clicked");
    var password = function generatePassword() {
      // Below grabs the whole text area with the placeholder Your Secure Password.
      var passwordText = document.querySelector("#password");
      console.log(passwordText);
      // Once the pw is generated placeholder text replaced by generated pw
      passwordText.setAttribute("placeholder", "abc123");
      return passwordText;
    };

    return password;
  };



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword2);
