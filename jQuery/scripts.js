// function Employee(id, name, job){
//     this.employeeId = id;
//     this.employeeName = name;
//     this.job = job;
// }

// var employee = new Employee(101, 'satya', 'Developer');

// try {
//     console.log(employee.employeeId);
//     console.log(employee.employeeName);
//     employee.job = "Developer";
//     console.log(employee.job);

//     console.log(employee.greet());
// }
// catch(error){
//     console.log(error.message);
// }

// console.log('should work');

// function init(){
//     document.getElementById("pLoad").style.display = "none";
//     document.getElementById("container").style.backgroundColor = "blue";
// }

// var timer = setTimeout(init, 5000);

// clearTimeout(timer);

function clock() {
  var today = new Date();

  document.getElementById("spnTimer").innerHTML = today.toLocaleTimeString();
}

var timer;
document.getElementById("btnStart").addEventListener("click", function() {
  timer = setInterval(() => {
    clock();
  }, 1000);
});


document.getElementById("btnStop").addEventListener("click", () => {
    clearInterval(timer);
});