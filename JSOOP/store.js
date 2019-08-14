var store = {
  appName: "Employee Management",
  appVersion: 1.0,
  isAddOrEdit: false,
  employeeData: [
    {
      employeeId: 101,
      employeeName: "satya",
      jobTitle: "Developer",
      salary: 1000
    },
    { employeeId: 102, employeeName: "James", jobTitle: "QA", salary: 500 }
  ],
  addEmploye: function(employee) {
    this.employeeData.push(employee);
    localStorage.setItem('employeeData', JSON.stringify(store.employeeData));
  },
  deleteEmployee: function(id) {
    for (var idx = 0; idx < this.employeeData.length; idx++) {
      if (this.employeeData[idx].employeeId == id) {
        this.employeeData.splice(idx, 1);
        localStorage.setItem('employeeData', JSON.stringify(store.employeeData));
        break;
      }
    }
  }
};

function initilize(){
  if(localStorage.getItem('employeeData') != null)
  {
    // get data from local storage
    store.employeeData =JSON.parse(localStorage.getItem('employeeData'));

  }else{
    //Save in the localStorage first time
    localStorage.setItem('employeeData', JSON.stringify(store.employeeData));
  }
}
function loadData(gridData) {
  var table =
    "<table><tr><th>Employee Id</th><th>Employee Name</th><th>Job Title</th><th>Salary</th><th>Actions</th></tr>";

  gridData.forEach(element => {
    table +=
      "<tr><td>" +
      element.employeeId +
      "</td><td>" +
      element.employeeName +
      "</td><td>" +
      element.jobTitle +
      "</td><td>" +
      element.salary +
      "</td><td><a class='btn-danger' onclick='fnDelete(" +
      element.employeeId +
      ")'>Delete</a>&nbsp;<a class='btn-primary'>Edit</a>&nbsp;<a class='btn-secondary'> View</a></td></tr>";
  });

  table += "</table>";
  document.getElementById("grid").innerHTML = table;
}

window.onload = function() {

  initilize();

  document.getElementById("topHeader").innerHTML = store.appName;

  //load initial data
  loadData(store.employeeData);

  toggleForm();

  document.getElementById("btnAddNew").addEventListener("click", function() {
    store.isAddOrEdit = true;
    toggleForm();
  });

  document.getElementById("btnSave").addEventListener("click", function() {
    var employee = {
      employeeId: document.getElementById("txtId").value,
      employeeName: document.getElementById("txtName").value,
      jobTitle: document.getElementById("txtJobTitle").value,
      salary: document.getElementById("txtSalary").value
    };

    store.addEmploye(employee);

    store.isAddOrEdit = false;
    toggleForm();

    loadData(store.employeeData);
  });

  document.getElementById("btnCancel").addEventListener("click", function() {
    store.isAddOrEdit = false;
    toggleForm();
    loadData(store.employeeData);
  });
};

function toggleForm() {
  if (store.isAddOrEdit) {
    document.getElementById("employeeFormContainer").style.display = "block";
    document.getElementById("grid").style.display = "none";
  } else {
    document.getElementById("grid").style.display = "block";
    document.getElementById("employeeFormContainer").style.display = "none";
  }
}

function fnDelete(id) {
  var status = confirm("Are you sure want to Delete Employee?");

  if (status) {
    store.deleteEmployee(id);
    loadData(store.employeeData);
  }
}
