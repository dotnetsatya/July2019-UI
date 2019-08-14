var store = {
  appName: "Employee Management",
  appVesrion: 1.0,
  isAddEdit: false,
  employeeData: [
    {
      employeeId: 101,
      employeeName: "Naresh",
      JobTittle: "UI Developer",
      salary: 200
    },
    {
      employeeId: 102,
      employeeName: "Priya",
      JobTittle: "Doctor",
      salary: 2000
    }
  ],
  addEmployee: function(employee) {
    this.employeeData.push(employee);
  },
  deleteEmployee: function(id) {
    for (var i = 0; i < this.employeeData.length; i++) {
      if (this.employeeData[i].employeeId == id) {
        this.employeeData.splice(i,1);
        console.log("shh");
        break;
      }
    }
  },
  viewEmployee: function(id) {
    for (var i = 0; i < this.employeeData.length; i++) {
      if (this.employeeData[i].employeeId == id) {
        var v = JSON.stringify(this.employeeData[i]);
        document.getElementById("employeeReadView").innerHTML = v;
      }
    }
  },
  editEmployee: function(id) {
    for (var i = 0; i < this.employeeData.length; i++) {
      if (this.employeeData[i].employeeId == id) {
        store.isAddEdit = true;
        toggleForm();        
        document.getElementById("txtId").value = this.employeeData[i].employeeId;
        document.getElementById("txtName").value = this.employeeData[i].employeeName;
        document.getElementById("txtJobTittle").value = this.employeeData[i].JobTittle;
        document.getElementById("txtSalary").value = this.employeeData[i].salary;
      }
    }
  }
};

function loadData(gridData) {
  var table =
    "<table><tr><th>Employee ID</th><th>Employee Name</th><th>Job Tittle</th><th>Salary</th><th>Actions</th></tr>";
  gridData.forEach(element => {
    table +=
      "<tr><td>" +
      element.employeeId +
      "</td><td>" +
      element.employeeName +
      "</td><td>" +
      element.JobTittle +
      "</td><td>" +
      element.salary +
      "</td><td><a onclick='fnDelete(" +
      element.employeeId +
      ")'>Delete</a>&nbsp;<a onclick='fnEdit(" +
      element.employeeId +
      ")'>Edit</a>&nbsp;<a onclick='fnView(" +
      element.employeeId +
      ")'>View</a></td></tr>";
  });

  table += "</table>";
  document.getElementById("grid").innerHTML = table;
}

window.onload = function() {
  document.getElementById("topHeader").innerHTML = store.appName;
  loadData(store.employeeData);

  toggleForm();

  document.getElementById("btnAddNew").addEventListener("click", function() {
    store.isAddEdit = true;
    toggleForm();
  });

  document.getElementById("btnSave").addEventListener("click", function() {
    var employee = {
      employeeId: document.getElementById("txtId").value,
      employeeName: document.getElementById("txtName").value,
      JobTittle: document.getElementById("txtJobTittle").value,
      salary: document.getElementById("txtSalary").value
    };
    store.addEmployee(employee);

    store.isAddEdit = false;
    toggleForm();
    loadData(store.employeeData);
  });

  document.getElementById("btnCancel").addEventListener("click", function() {
    store.isAddEdit = false;
    toggleForm();
    loadData(store.employeeData);
  });
};

function toggleForm() {
  if (store.isAddEdit) {
    document.getElementById("employeeFormContainer").style.display = "block";
    document.getElementById("grid").style.display = "none";
    document.getElementById("employeeReadView").style.display = "none";
  } else {
    document.getElementById("employeeFormContainer").style.display = "none";
    document.getElementById("grid").style.display = "block";
    document.getElementById("employeeReadView").style.display = "block";
  }
}

function fnDelete(id) {
  var status = confirm("Are you sure want to delete?");

  if (status) {
    store.deleteEmployee(id);
    loadData(store.employeeData);
  }
}

function fnView(id) {
  store.viewEmployee(id);
  loadData(store.employeeData);
}

function fnEdit(id) {
  store.editEmployee(id);
  loadData(store.employeeData);
}
