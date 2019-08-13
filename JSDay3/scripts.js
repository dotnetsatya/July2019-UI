// var input = prompt("enter you name", "Name");

// var status = confirm("Are you " + input + "?");
// console.log(status);
// if (status) {
//   alert("You are authorized");
// } else {
//   alert("You are not authoried");
// }

// let myText = 'I am a string';
// let newString = myText.replace('string', 'sausage');
// console.log(newString);

// let myArray = ['I', 'love', 'chocolate', 'frogs'];
// let madeAString = myArray.join('-');
// console.log(madeAString);

// var randoom = Math.random(1);
// console.log(randoom);

// function greet(name) {
//     console.log('Hello ' + name);
// }

// greet('satya');

// var btn = document.getElementById("btnOk");

// btn.onclick = greetMessage;

// btn.addEventListener('click', function(){
//     var name = document.getElementById("txtName").value;
//     document.getElementById("spnMessage").innerHTML = "Hello " + name;
// });

// btn.addEventListener('click', greetMessage);

// function greetMessage(){
//     var name = document.getElementById("txtName").value;
//     document.getElementById("spnMessage").innerHTML = "Hello " + name;
// }

// function addition(value1, value2){
//     return value1 + value2;
// }

// console.log(addition(1,2));

// var btn = document.getElementById('btnOk');

// function random(number) {
//   return Math.floor(Math.random()*(number+1));
// }

// btn.onclick = bgChange;

// function bgChange(event) {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   event.target.style.backgroundColor = rndCol;
// }

// document.getElementById("spn1").onclick = bgChange;

// document.getElementById("lnkGoogle").addEventListener("click", function(evt){
//     evt.preventDefault();
// alert('you clicked on link');
// });

document.getElementById("loginForm").onsubmit = submitLogin;

function submitLogin(event) {
  event.preventDefault();
  alert("You clicked on submit button");
  //write custom logic to redirect
}
