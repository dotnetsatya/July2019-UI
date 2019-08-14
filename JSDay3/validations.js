function fnRequired(arg) {
  if (arg.value == null || arg.value == "") {
    arg.focus();
    return false;
  } else {
    return true;
  }
}

document.getElementById("loginForm").onsubmit = function(event) {
  var usernameField = document.getElementById("txtUsername");
  var passwordField = document.getElementById("txtPassword");

  if (fnRequired(usernameField) && fnRequired(passwordField)) {
    return true;
  } else {
    return false;
  }
};

var myArray = [10, 20, 30];
// myArray.push(40);
// myArray.unshift(-10);   
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

//To remove at given index
myArray.splice(1,1);
console.log(myArray);