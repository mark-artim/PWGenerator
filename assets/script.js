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

  if (lc == false && uc == false && nu == false) {
    alert("Only Special Characters are left so they will be used.");
    sp = true;
  } else
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

  // Build list of chars to include, start building pw with at least one char frome each
  var newPW = "";
  var incChars = "";
  if (lc == true) {
    incChars = lcChars;
    newPW += lcChars.charAt(Math.floor(Math.random() * lcChars.length));
  };
  if (uc == true) {
    incChars += ucChars;
    newPW += ucChars.charAt(Math.floor(Math.random() * ucChars.length));
  };
  if (nu == true) {
    incChars += nuChars;
    newPW += nuChars.charAt(Math.floor(Math.random() * nuChars.length));
  };
  if (sp == true) {
    incChars += spChars;
    newPW += spChars.charAt(Math.floor(Math.random() * spChars.length));
  };

  // need to figure out current length of initial pw
  var initPWlength = newPW.length;

  // randomly generate the remaining chars for pw length minus the intial chars
  for (var j = 0; j < pwLength-initPWlength; j++) {
    newPW += incChars.charAt(Math.floor(Math.random() * incChars.length));
    genPW = false;
  }

    var passwordText = document.querySelector("#password");
    passwordText.setAttribute("placeholder", newPW);
    return

    function writePassword() {
      var password = function generatePassword() {
        // Below grabs the whole text area with the placeholder Your Secure Password.
        var passwordText = document.querySelector("#password");
        return passwordText;
      };
    };
  };

    // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword2);
