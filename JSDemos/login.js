function validateLogin(){
    // var username = document.getElementById("txtUsername").value;
    // var password = document.getElementById("txtPassword").value;

    var username = document.loginForm.txtUsername.value;
    var password = document.loginForm.txtPassword.value;

    if(username == "admin" && password == "password"){
        alert("Valid user");
    }else{
        alert("invalid user");
    }
}