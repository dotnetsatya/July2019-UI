// var value = 10;
// var value1 = "10";

// if(value == 10){
//     console.log("the given value is 10");
// }

// if (value === value1) {
//   console.log("both are equal");
// } else {
//   console.log("not equal");
// }

// var index = 1;
// do {
//   console.log(index);
//   index++;
// } while (index > 10);

var index = 1;
for (; index < 10; ) {
  console.log(index);
  index++;
}

function validateLogin() {
  var username = document.getElementById("txtUsername").value;
  var password = document.getElementById("txtPassword").value;

  if (username == "admin" && password == "admin") {
    window.location.href = "admin.html";
  } else if (username == "user" && password == "user") {
    window.location.href = "user.html";
  } else {
    window.location.href = "default.html";
  }
}

var names = ["satya", "james", "scott", "Allen"];
console.log(names.length);

var listData = "<ul>";

// for(let index = 0; index < names.length; index ++){
//     listData += "<li>" + names[index] + "</li>";
// }

// for (var index in names) {
//     listData += "<li>" + names[index] + "</li>";
// }

names.forEach(function(entry) {
  listData += "<li>" + entry + "</li>";
});

listData += "</ul>";

document.getElementById("container").innerHTML = listData;

var employees = [
  { employeeId: 101, employeeName: "satya", jobTitle: "Developer" },
  { employeeId: 102, employeeName: "james", jobTitle: "DevOps Engineer" },
  { employeeId: 103, employeeName: "Mat", jobTitle: "Tester" },
  { employeeId: 101, employeeName: "satya", jobTitle: "Developer" },
  { employeeId: 102, employeeName: "james", jobTitle: "DevOps Engineer" },
  { employeeId: 103, employeeName: "Mat", jobTitle: "Tester" },
  { employeeId: 101, employeeName: "satya", jobTitle: "Developer" },
  { employeeId: 102, employeeName: "james", jobTitle: "DevOps Engineer" },
  { employeeId: 103, employeeName: "Mat", jobTitle: "Tester" }
];

var data =
  "<table><tr><th>Employee Id</th><th>Employee Name</th><th>Job Title</th></tr>";

employees.forEach(function(entry) {
  data +=
    "<tr><td>" +
    entry.employeeId +
    "</td><td>" +
    entry.employeeName +
    "</td><td>" +
    entry.jobTitle +
    "</td></tr>";
});

data += "</table>";

document.getElementById("employeeData").innerHTML = data;

var jobTitle = 2;

switch (jobTitle) {
  case 1:
    console.log("Developer");
    break;
  case 2:
    console.log("Tester");
    break;
  case 3:
    console.log("Architect");
    break;
  default:
    console.log("Junior Engineer");
}

// for (var index = 1; index <= 100; index++) {
//     console.log(index);
//     if(index == 10){
//         break;
//     }
// }



for (var index = 1; index <= 15; index++) {
    if(index  == 10)
    continue;
    console.log(index);
}