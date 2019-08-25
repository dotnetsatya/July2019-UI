var store = {
  appName: "jQuery App",
  data: [
    { username: "satya", password: "satya" },
    { username: "admin", password: "admin" }
  ],
  validateLogin: function(username, password) {
    var isValid = false;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].username == username && this.data[i].password == password) {
        isValid = true;
        break;
      }
    }
    return isValid;
  }
};
