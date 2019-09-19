function TelephoneDirectory() {
  this.appName = "Online Telephone Directory";
  this.version = 1.0;

  this.users = [
    {
      userId: 1,
      username: "admin",
      password: "admin",
      email: "admin@gmail.com",
      mobile: "9876543210"
    }
  ];

  // this.telephoneContacts = [
  //   {
  //       contactId: 1,
  //     firstName: "Naresh",
  //     lastName: "Gunimanikula",
  //     email: "naresh@gmail.com",
  //     address: "IN",
  //     userId: 1
  //   }
  // ];

  // this.addUser = function(user) {
  //   user.userId = this.users.length + 1;
  //   this.users.push(user);
  // };

  // this.getUserById = function(id) {};

  // this.getUserByUsername = function(username) {};

  // this.deleteUser = function(userId) {};
  // this.updateUser = function(user) {};
  // this.resetPassword = function(username, password) {};
  // this.addContact = function(userId, contact){
  //     contact.userId = userId;
  //     contact.contactId = this.telephoneContacts.length + 1;
  //     this.telephoneContacts.push(contact);
  // }
}

function initilize() {
  if (localStorage.getItem("usersData") != null) {
    TelephoneDirectory.users = JSON.parse(localStorage.getItem("userData"));
  } else {
    localStorage.setItem("userData", JSON.stringify(TelephoneDirectory.users));
  }
}
function loadData(userData) {
  var user = new TelephoneDirectory();
  // console.log(user.users);
  //var userData = localStorage.setItem('userData',JSON.stringify())
  // console.log(userData.userId);
  // document.getElementById("txtUserName").innerHTML = userData.username;
  // document.getElementById("txtPassword").innerHTML = TelephoneDirectory.users.password;
  // document.getElementById("txtEmail").innerHTML = TelephoneDirectory.users.email;
  // document.getElementById("txtMobile").innerHTML = TelephoneDirectory.users.mobile;
}

window.onload = function() {
  initilize();
  loadData(this.users);
  console.log(loadData);
  document.getElementById("btnSubmit").addEventListener("click", function() {
    alert("hi this is me");
  });
};
